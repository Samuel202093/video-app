import React from 'react'
import Chatbox from './Chatbox/Chatbox'
import { useSelector } from 'react-redux'


// const DUMMY_CHATBOXES = [
//     {
//         username: 'Martin',
//         socketId: 3213123,
//         messages: []
//     },
//     {
//         username: 'Test',
//         socketId: 3233123,
//         messages: []
//     }
// ]

const Messenger = () => {
    const chatboxes = useSelector((state) => state.messenger.chatboxes)
    
  return (
    <div className='absolute bottom-3 left-1 bg-white flex min-h-[10vh] w-[30%] border-[2px]y border-red-900y'>
      {chatboxes.map((chatbox)=>{ return <Chatbox key={chatbox.socketId} socketId={chatbox.socketId} username={chatbox.username}/>})}
    </div>
  )
}

export default Messenger
