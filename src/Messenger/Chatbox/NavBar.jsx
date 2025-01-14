import React from 'react'
import closeIcon from '../../resources/images/close-icon.svg'
import { removeChatbox } from '../messengerSlice'
import { useDispatch } from 'react-redux'


const ChatboxLabel = ({username})=>{
    return <p className='text-base font-semibold text-white'>{username}</p>
}

const CloseButton = ({socketId})=>{
    const dispatch = useDispatch()
const handleCloseChatbox = ()=>{
    dispatch(removeChatbox(socketId))
}



return <div className='w-[20px] h-[20px] absolute right-[5px]'>
    <img src={closeIcon} alt="close"  className='h-full w-full cursor-pointer' onClick={handleCloseChatbox}/>
</div>
}
const NavBar = ({username, socketId}) => {
  return (
    <nav className='w-full h-[40px] bg-[#049CFF] flex justify-center items-center relative'>
      <ChatboxLabel username={username}/>
      <CloseButton socketId={socketId}/>

    </nav>
  )
}

export default NavBar
