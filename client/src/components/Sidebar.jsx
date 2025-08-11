import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import snappyLogo from "../assets/snappyLogo.png";
import menuIcon from "../assets/menu_icon.png";
import searchIcon from "../assets/search_icon.png";
import AuthContext from "../../context/AuthContextProvider";
import { ChatContext } from "../../context/ChatContextProvider";
import { user_fallback } from "../lib/assets";

const Sidebar = () => {
  const {
    getUsers,
    users,
    selectedUsers,
    setSelectedUsers,
    unseenMessages,
    setUnseenMessages,
  } = useContext(ChatContext);

  const navigate = useNavigate();
  const { logOut, onlineUsers } = useContext(AuthContext);
  const [input, setInput] = useState(false);

  const filteredUsers = input
    ? users.filter((user) =>
        user.fullName.toLowerCase().includes(input.toLowerCase())
      )
    : users;

  useEffect(() => {
    getUsers();
  }, [onlineUsers, getUsers]);

  return (
    <div
      className={`bg-[#8185B2]/10 h-full p-2 sm:p-3 md:p-4 lg:p-5 rounded-r-xl overflow-y-scroll text-white ${
        selectedUsers ? "max-md:hidden" : ""
      }`}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <img src={snappyLogo} alt="logo" className="w-20 sm:w-24 md:w-28 lg:w-32" />
          <div className="relative py-2 group">
            <img src={menuIcon} alt="menu" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
            <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#28383E] border border-gray-600 text-white/80 hidden group-hover:block">
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p onClick={() => logOut()} className="cursor-pointer text-sm">
                Logout
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#2A3940] rounded-full flex items-center gap-2 py-2 sm:py-3 px-3 sm:px-4 mt-3 sm:mt-4 md:mt-5">
          <img src={searchIcon} alt="Search Icon" className="w-2.5 sm:w-3" />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="bg-transparent border-none outline-none text-white text-xs sm:text-sm placeholder-[#c8c8c8] flex-1"
            placeholder="Search User..."
          />
        </div>
      </div>

      <div className="flex flex-col">
        {filteredUsers.map((user, index) => (
          <div
            onClick={() => {
              setSelectedUsers(user);
              setUnseenMessages((prev) => ({
                ...prev,
                [user._id]: 0,
              }));
            }}
            key={index}
            className={`relative flex items-center gap-2 p-2 sm:p-3 pl-2 sm:pl-4 rounded-lg cursor-pointer ${
              selectedUsers?._id === user._id && "bg-[#282142]/50"
            }`}
          >
            <img
              src={user?.profilePic || user_fallback}
              alt=""
              className="w-8 h-8 sm:w-[35px] sm:h-[35px] aspect-[1/1] rounded-full"
            />
            <div className="flex flex-col leading-tight sm:leading-5 min-w-0 flex-1">
              <p className="text-sm sm:text-base font-medium truncate">{user.fullName}</p>
              {onlineUsers.includes(user._id) ? (
                <span className="text-green-400 text-xs">Online</span>
              ) : (
                <span className="text-neutral-400 text-xs">Offline</span>
              )}
            </div>
            {unseenMessages[user._id] > 0 && (
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-green-700 text-white font-medium">
                {unseenMessages[user._id]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
