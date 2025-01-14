import React from 'react'


const RightMessage = ({content})=>{
return <p className='p-3 inline-block m-2 rounded-[25px] text-base max-w-[80%] bg-[rgba(39,220,197,0.9)]'>{content}</p>
}

const LeftMessage = ({content})=>{
return <p className='p-3 inline-block m-2 rounded-[25px] text-base max-w-[80%] bg-[rgba(211,211,211,0.9)]'>{content}</p>
}

const SingleMessage = ({content, myMessage}) => {
  return (
    <div className='w-full flex' style={myMessage ? {justifyContent:'flex-end'} : {justifyContent:'flex-start'}}>
      
      {myMessage ? <RightMessage content={content}/> : <LeftMessage content={content}/>}
    </div>
  )
}

export default SingleMessage
