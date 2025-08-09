import React, { useEffect, useRef } from 'react'
import { messagesDummyData } from '../lib/assets'
import formatMessageTime from '../lib/utils';

const ChatContainer = ({selectedUser, setSelectedUser}) => {
  const scrollEndRef = useRef();

  useEffect(() => {
    if(scrollEndRef.current){
        scrollEndRef.current.scrollIntoView({behavior: "smooth"})
    }
  }, [])
    

  return selectedUser ? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
        {/* Header */}
        <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
            <img src="./src/assets/arjun_sharma.jpeg" alt="Arjun Sharma" className='w-8 rounded-full'/>
            <p className='flex-1 text-lg text-white flex items-center gap-2'>
                Arjun Sharma
                <span className='w-2 h-2 rounded-full bg-green-500 mt-1'></span>
            </p>
            <img onClick={() => {setSelectedUser(null)}} src="./src/assets/arrow_icon.png" alt="Arrow Icon"  className='md:hidden max-w-7'/>
            <img src="./src/assets/help_icon.png" alt="Help Icon" className='max-w-5'/>
        </div>

        {/* Chat Section */}
        <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
            {messagesDummyData.map((message, index) => (
                <div key={index} className={`flex items-end gap-2 justify-end ${message.senderId !== 'ind002' && 'flex-row-reverse'}`}>
                    {message.image ? (
                        <img src={message.image} alt="" className='max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8'/>
                    ) : (
                        <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${message.senderId === 'ind002' ? 'rounded-br-none' : 'rounded-bl-none'}`}>{message.text}</p>
                    )}

                    <div className='text-center text-xs'>
                        <img src={message.senderId === 'ind002' ? './src/assets/priya_verma.jpg' : './src/assets/arjun_sharma.jpeg'} alt="" className='w-7 rounded-full'/>
                        <p className='text-gray-500'>{formatMessageTime(message.createdAt)}</p>
                    </div>
                </div>
            ))}
            <div ref={scrollEndRef}></div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3'>
            <div className='flex flex-1 items-center bg-gray-100/12 px-3 rounded-full '>
                <input type="text" placeholder='Send a message...' 
                className='flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-500'
                />
                <input type="file" id='image' accept='image/png, image/jpeg, image/jpg' hidden/>
                <label htmlFor="image">
                    <img src="./src/assets/gallery_icon.svg" alt="Gallery" className='w-5 mr-2 cursor-pointer'/>
                </label>
            </div>
            <img src="./src/assets/send_button.png" alt="Send Button" className='w-7 cursor-pointer'/>
        </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500  max-md:hidden'>
        <img src="./logo.png" alt="Logo" className='max-w-16' />
        <p className='text-2xl font-medium text-white mt-2'>SnappyChat</p>
        <p className='text-[16px] font-medium text-white mt-2 tracking-wide'>From quick chats to big decisions, we got you covered</p>
    </div>
  )
}

export default ChatContainer