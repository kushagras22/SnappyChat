import { useContext, useEffect, useState, useCallback } from "react"
import { ChatContext } from "./ChatContextProvider"
import AuthContext from "./AuthContextProvider";
import toast from "react-hot-toast";

export const ChatProvider = ({children}) => {
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState(null); 
    const [unseenMessages, setUnseenMessages] = useState({});
    
    const {socket, axios} = useContext(AuthContext);

    const getUsers = async() => {
        try {
          const {data} = await axios.get("/api/messages/users");
          if(data.success){
            setUsers(data.users);
            setUnseenMessages(data.unseenMessages);
          }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const getMessages = async(userId) => {
        try {
           const {data} =  await axios.get(`/api/messages/${userId}`);
           if(data.success){
            setMessages(data.messages);
           }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const sendMessage = async(messageData) => {
        try {
            const {data} = await axios.post(`/api/messages/send/${selectedUsers._id}`, messageData);
            if(data.success){
                setMessages((prevMessages) => [...prevMessages, data.newMessage]);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const subscribeToMessages = useCallback(async() => {
        if(!socket) return;

        socket.on("newMessage", (newMessage) => {
            if(selectedUsers && newMessage.senderId === selectedUsers._id){
                newMessage.seen = true;
                setMessages((prevMessages) => [...prevMessages, newMessage]);
                axios.put(`/api/messages/mark/${newMessage._id}`);
            } else {
                setUnseenMessages((prevUnseenMessages) => ({
                    ...prevUnseenMessages, [newMessage.senderId] : prevUnseenMessages[newMessage.senderId] ? prevUnseenMessages[newMessage.senderId] + 1 : 1
                }));
            }
        })
    }, [socket, selectedUsers, axios])

    const unsubscribeMessages = useCallback(() => {
        if(socket) socket.off("newMessage");
    }, [socket])

    useEffect(() => {
        subscribeToMessages();
        return () => unsubscribeMessages();
    }, [subscribeToMessages, unsubscribeMessages]);

    const value = {
        messages,
        users,
        selectedUsers,
        getUsers,
        getMessages,
        sendMessage,
        setSelectedUsers,
        unseenMessages,
        setUnseenMessages
    }

    return (<ChatContext.Provider value={value}>
        {children}
    </ChatContext.Provider>)
}