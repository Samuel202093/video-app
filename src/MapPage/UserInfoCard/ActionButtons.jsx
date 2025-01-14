import React from 'react'
import ChatButton from './chatButton'

const ActionButtons = (props) => {
  return (
    <div className='absolute top-4 right-0'>
      <ChatButton {...props}/>
    </div>
  )
}

export default ActionButtons
