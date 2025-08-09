import React from 'react'
import { imagesDummyData } from '../lib/assets'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
    <div className={`bg-[#13222D] text-white w-full relative overflow-y-scroll ${selectedUser ? "max-md:hidden" : ""}`}>
      <div className='flex flex-col items-center gap-2 text-xs font-light mx-auto pt-16 text-white/80'>
        <img src={selectedUser?.profilePic || './src/assets/user.png'} alt="User" className='w-20 aspect-[1/1] rounded-full'/>
        <h1 className='px-10 text-xl font-medium mx-auto flex items-center gap-2'>
          <p className='w-2 h-2 rounded-full bg-green-500'></p>
          {selectedUser.fullName}
        </h1>
        <p className='px-10 mx-auto text-center'>{selectedUser.bio}</p>
      </div>

      <hr className='border-[#ffffff50] my-4'/>

      <div className='px-5 text-xs'>
        <p>Media</p>
        <div className='mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80'>
          {/* {imagesDummyData.map((image, index) => (
            
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default RightSidebar