import React, { useContext, useEffect, useRef, useState } from "react";
import { user_fallback } from "../lib/assets";
import arrowIcon from "../assets/arrow_icon.png";
import helpIcon from "../assets/help_icon.png";
import galleryIcon from "../assets/gallery_icon.svg";
import sendButton from "../assets/send_button.png";
import formatMessageTime from "../lib/utils";
import { ChatContext } from "../../context/ChatContextProvider";
import AuthContext from "../../context/AuthContextProvider";
import toast from "react-hot-toast";

const ChatContainer = () => {
  const { messages, selectedUsers, setSelectedUsers, sendMessage, getMessages } =
    useContext(ChatContext);
  const { authUser, onlineUsers } = useContext(AuthContext);
  const scrollEndRef = useRef();

  const [input, setInput] = useState('');

  const handleSendMessage = async(e) => {
    e.preventDefault();

    if(input.trim() === "") return null;
    await sendMessage({text: input.trim()});
    setInput("");
  }

  const handleSendImage = async(e) => {
    const file = e.target.files[0];
    if(!file || !file.type.startsWith("image/")){
        toast.error("Select an image file");
        return;
    }
    const reader = new FileReader();
    reader.onloadend = async() => {
        await sendMessage({image: reader.result})
        e.target.value = ""
    }
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    if(selectedUsers) {
        getMessages(selectedUsers._id);
    }
  }, [selectedUsers, getMessages])

  useEffect(() => {
    if (scrollEndRef.current && messages && messages.length > 0) {
      // Only auto-scroll if the user is already near the bottom
      const chatContainer = scrollEndRef.current.parentElement;
      const isNearBottom = chatContainer.scrollTop + chatContainer.clientHeight >= chatContainer.scrollHeight - 100;
      
      if (isNearBottom) {
        scrollEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [messages]);

  return selectedUsers ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      {/* Header */}
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
                 <img src={selectedUsers.profilePic || user_fallback} alt="Arjun Sharma" className="w-8 rounded-full" />
                 <p className="flex-1 text-lg text-white flex items-center gap-2">
           {selectedUsers.fullName}
           {onlineUsers.includes(selectedUsers._id) && <span className="w-2 h-2 rounded-full bg-green-500 mt-1"></span>}
         </p>
                 <img
           onClick={() => {
             setSelectedUsers(null);
           }}
          src={arrowIcon}
          alt="Arrow Icon"
          className="md:hidden max-w-7"
        />
        <img src={helpIcon} alt="Help Icon" className="max-w-5" />
      </div>

      {/* Chat Section */}
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${
              message.senderId === authUser._id ? "justify-end" : "justify-start"
            }`}
          >
            {message.image ? (
              <img
                src={message.image}
                alt=""
                className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
              />
            ) : (
              <p
                className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all text-white ${
                  message.senderId === authUser._id
                    ? "bg-violet-500/30 rounded-br-none"
                    : "bg-gray-600/30 rounded-bl-none"
                }`}
              >
                {message.text}
              </p>
            )}

            <div className="text-center text-xs">
              <img
                src={message.senderId === authUser._id ? authUser?.profilePic || user_fallback : selectedUsers?.profilePic || user_fallback}
                alt=""
                className="w-7 rounded-full"
              />
              <p className="text-gray-500">
                {formatMessageTime(message.createdAt)}
              </p>
            </div>
          </div>
        ))}
        <div ref={scrollEndRef}></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex flex-1 items-center bg-gray-100/12 px-3 rounded-full ">
          <input onChange={(e) => setInput(e.target.value)} value={input} onKeyDown={(e) => e.key === "Enter" ? handleSendMessage(e) : null}
             type="text"
            placeholder="Send a message..."
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-500"
          />
          <input onChange={handleSendImage}
            type="file"
            id="image"
            accept="image/png, image/jpeg, image/jpg"
            hidden
          />
          <label htmlFor="image">
            <img
              src={galleryIcon}
              alt="Gallery"
              className="w-5 mr-2 cursor-pointer"
            />
          </label>
        </div>
        <img onClick={handleSendMessage}
          src={sendButton}
          alt="Send Button"
          className="w-7 cursor-pointer"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500  max-md:hidden">
      <img src="/logo.png" alt="Logo" className="max-w-16" />
      <p className="text-2xl font-medium text-white mt-2">SnappyChat</p>
      <p className="text-[16px] font-medium text-white mt-2 tracking-wide">
        From quick chats to big decisions, we got you covered
      </p>
    </div>
  );
};

export default ChatContainer;
