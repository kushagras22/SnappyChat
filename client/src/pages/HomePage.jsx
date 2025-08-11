import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { ChatContext } from '../../context/ChatContextProvider'

const HomePage = () => {
  
  const {selectedUsers} = useContext(ChatContext);

  return (
    <div className='w-full h-screen p-2 sm:p-4 md:p-6 lg:p-8'>
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid grid-cols-1 relative ${
        selectedUsers 
          ? 'md:grid-cols-[1fr_1.5fr_1fr] lg:grid-cols-[1fr_2fr_1fr] xl:grid-cols-[1fr_2.5fr_1fr]' 
          : 'md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1.5fr]'
      }`}>
        <Sidebar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage