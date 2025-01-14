import React from 'react'
import NavBar from './NavBar'
import Messages from './Messages'
import NewMessage from './NewMessage'

const Chatbox = (props) => {
  const { socketId } = props

  return (
    <div className='min-h-[50vh] w-[50%] bg-white ml-[15px] rounded-t-[10px] rounded-e-[10px] mr-[15px] flex flex-col border-2 border-[rgba(0,0,0,0.3)] p-0'>
      {/* <h1>HELLO</h1> */}
      
      <NavBar {...props}/>
      {/* <input type="text" /> */}
      <Messages socketId={socketId}/>
      <NewMessage socketId={socketId}/>
    </div>
  )
}

export default Chatbox
