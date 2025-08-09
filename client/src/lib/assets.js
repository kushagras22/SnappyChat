import pc1 from "./src/assets/pc1.jpg";
import pc2 from "./src/assets/pc2.jpg";
import pc3 from "./src/assets/pc3.jpg";
import pc4 from "./src/assets/pc4.jpg";
import pc5 from "./src/assets/pc5.jpg";

export const imagesDummyData = [pc1, pc2, pc3, pc4, pc5];

export const userDummyData = [
    {
        "_id": "ind001",
        "email": "arjun.sharma@example.in",
        "fullName": "Arjun Sharma",
        "profilePic": "./src/assets/arjun_sharma.jpeg",
        "bio": "Namaste! Using SnappyChat from Delhi.",
    },
    {
        "_id": "ind002",
        "email": "priya.verma@example.in",
        "fullName": "Priya Verma",
        "profilePic": "./src/assets/priya_verma.jpg",
        "bio": "Hello! SnappyChat is awesome. Greetings from Mumbai.",
    },
    {
        "_id": "ind003",
        "email": "rahul.patel@example.in",
        "fullName": "Rahul Patel",
        "profilePic": "./src/assets/rahul_verma.avif",
        "bio": "Hi! Enjoying SnappyChat in Ahmedabad.",
    },
    {
        "_id": "ind004",
        "email": "ananya.iyer@example.in",
        "fullName": "Ananya Iyer",
        "profilePic": "./src/assets/profile_ananya.jpg",
        "bio": "Vanakkam! Chatting from Chennai.",
    },
    {
        "_id": "ind005",
        "email": "vikram.singh@example.in",
        "fullName": "Vikram Singh",
        "profilePic": "./src/assets/profile_vikram.jpg",
        "bio": "Sat Sri Akal! Using SnappyChat from Amritsar.",
    }
]

export const messagesDummyData = [
    {
        "_id": "msg001",
        "senderId": "ind001",
        "receiverId": "ind002",
        "text": "Hey Priya, kaisi ho?",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "msg002",
        "senderId": "ind002",
        "receiverId": "ind001",
        "text": "Hi Arjun! Main theek hoon, tum sunao?",
        "seen": true,
        "createdAt": "2025-04-28T10:23:34.520Z",
    },
    {
        "_id": "msg003",
        "senderId": "ind001",
        "receiverId": "ind002",
        "text": "Sab badhiya! Weekend plans?",
        "seen": true,
        "createdAt": "2025-04-28T10:23:37.301Z",
    },
    {
        "_id": "msg004",
        "senderId": "ind002",
        "receiverId": "ind001",
        "text": "Family ke saath Gateway of India jaa rahi hoon.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:40.334Z",
    },
    {
        "_id": "msg005",
        "senderId": "ind002",
        "receiverId": "ind001",
        "image": "./src/assets/menu_icon.png",
        "seen": true,
        "createdAt": "2025-04-28T10:23:56.265Z",
    },
    {
        "_id": "msg006",
        "senderId": "ind001",
        "receiverId": "ind002",
        "image": "src/assets/menu_icon.png",
        "seen": true,
        "createdAt": "2025-04-28T10:24:05.164Z",
    },
    {
        "_id": "msg007",
        "senderId": "ind001",
        "receiverId": "ind002",
        "text": "Wah! Mazaa aayega.",
        "seen": true,
        "createdAt": "2025-04-28T10:24:08.523Z",
    }
]
