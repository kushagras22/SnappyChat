import React, { useContext, useEffect, useState } from 'react'
import { fallbackUserIcon } from '../lib/assets'
import { ChatContext } from '../../context/ChatContextProvider'
import AuthContext from '../../context/AuthContextProvider';

const RightSidebar = () => {
  const {selectedUsers, messages} = useContext(ChatContext);
  const {logOut, onlineUsers} = useContext(AuthContext);  
  const [msgImages, setMsgImages] = useState([]);

  useEffect(() => {
    setMsgImages(
      messages.filter(msg => msg.image).map(msg => msg.image)
    )
  }, [messages])

  return selectedUsers ? (
    <div className="bg-[#13222D] text-white w-full h-full relative overflow-y-scroll z-10 max-md:hidden">
      <div className='flex flex-col items-center gap-2 sm:gap-3 text-xs sm:text-sm font-light mx-auto pt-8 sm:pt-12 md:pt-16 text-white/80 px-2 sm:px-4'>
        <img src={selectedUsers?.profilePic || fallbackUserIcon} alt="User" className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 aspect-[1/1] rounded-full'/>
        <h1 className='px-4 sm:px-6 md:px-10 text-lg sm:text-xl font-medium mx-auto flex items-center gap-2 text-center'>
          {onlineUsers.includes(selectedUsers._id) && <span className='w-2 h-2 rounded-full bg-green-500 flex-shrink-0'></span>}
          <span className="truncate">{selectedUsers.fullName}</span>
        </h1>
        <p className='px-4 sm:px-6 md:px-10 mx-auto text-center text-xs sm:text-sm'>{selectedUsers.bio}</p>
      </div>

      <hr className='border-[#ffffff50] my-4'/>

      <div className='px-3 sm:px-4 md:px-5 text-xs'>
        <p className='text-center font-medium text-base sm:text-lg'>Media</p>
        <div className='mt-2 max-h-[150px] sm:max-h-[180px] md:max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 opacity-80 px-2'>
          {msgImages.map((url, index) => (
            <div key={index} onClick={() => window.open(url)} className='cursor-pointer rounded'>
              <img src={url} alt="Image" className='w-full h-full object-cover rounded-md'/>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => logOut()}
      className='absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-xs sm:text-sm font-medium tracking-wide py-2 px-8 sm:px-12 md:px-20 rounded-full cursor-pointer hover:from-purple-500 hover:to-violet-700 transition-all duration-200'>
        Logout
      </button>
    </div>
  ) : null
}

export default RightSidebar