
export const imagesDummyData = [
  "https://images.unsplash.com/photo-1754638069174-7aa06c176b61?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/flagged/photo-1563693703591-ef3a7e5d70d9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1752861680950-95de10209572?q=80&w=1069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1754648915228-994a9c6dca51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1754436412955-e2aae088a979?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1743397015920-e4682a813b24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1744690176524-62580857164d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];


import arjun_sharma from "../assets/arjun_sharma.jpeg";
import priya_verma from "../assets/priya_verma.jpg";
import rahul_verma from "../assets/rahul_verma.avif";
import profile_ananya from "../assets/profile_ananya.jpg";
import profile_vikram from "../assets/profile_vikram.jpg";
import menu_icon from "../assets/menu_icon.png";
import user_fallback from "../assets/user.png";
import logo from "../assets/snappyLogo.png";
import arrowIcon from "../assets/arrow_icon.png";
import logoIcon from "/logo.png";

export { logo, arrowIcon, user_fallback, logoIcon };

export const userDummyData = [
    {
        "_id": "ind001",
        "email": "arjun.sharma@example.in",
        "fullName": "Arjun Sharma",
        "profilePic": arjun_sharma,
        "bio": "Namaste! Using SnappyChat from Delhi.",
    },
    {
        "_id": "ind002",
        "email": "priya.verma@example.in",
        "fullName": "Priya Verma",
        "profilePic": priya_verma,
        "bio": "Hello! SnappyChat is awesome. Greetings from Mumbai.",
    },
    {
        "_id": "ind003",
        "email": "rahul.patel@example.in",
        "fullName": "Rahul Patel",
        "profilePic": rahul_verma,
        "bio": "Hi! Enjoying SnappyChat in Ahmedabad.",
    },
    {
        "_id": "ind004",
        "email": "ananya.iyer@example.in",
        "fullName": "Ananya Iyer",
        "profilePic": profile_ananya,
        "bio": "Vanakkam! Chatting from Chennai.",
    },
    {
        "_id": "ind005",
        "email": "vikram.singh@example.in",
        "fullName": "Vikram Singh",
        "profilePic": profile_vikram,
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
        "image": menu_icon,
        "seen": true,
        "createdAt": "2025-04-28T10:23:56.265Z",
    },
    {
        "_id": "msg006",
        "senderId": "ind001",
        "receiverId": "ind002",
        "image": menu_icon,
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

export const fallbackUserIcon = user_fallback;
