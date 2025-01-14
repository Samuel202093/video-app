import React,{ useRef, useEffect } from 'react'
import SingleMessage from './SingleMessage'
import { useSelector } from 'react-redux'


// const messages = [
//     {
//         id: 1,
//         myMessage: true,
//         content: "Hello"
//     },
//     {
//         id: 2,
//         myMessage: false,
//         content: "Hello Back"
//     }
// ]

const Messages = ({socketId}) => {
  const messages = useSelector(state => state.messenger.chatHistory[socketId])

  const scrollRef = useRef();

  const scrollToBottom = ()=>{
    scrollRef.current.scrollIntoView({behaviour: "smooth"})
  }
  // console.log(`message component:`,messages)

  useEffect(()=>{
    scrollToBottom()
  }, [messages])

  return (
    <div className='w-full flex flex-col overflow-y-auto grow'>
      
      {messages?.map((message)=> ( <SingleMessage key={message.id} content={message.content} myMessage={message.myMessage}/>))}

      <div ref={scrollRef}></div>
    </div>
  )
}

export default Messages
