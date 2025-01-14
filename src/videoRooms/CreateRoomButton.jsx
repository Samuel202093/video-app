import React from 'react'
import callIcon from '../resources/images/56 - call-icon.svg'
import { createVideoRoom } from '../store/actions/videoRoomActions'
import { useSelector } from 'react-redux'

const CreateRoomButton = () => {
    const inRoom = useSelector((state)=> state.videoRooms.inRoom)
    const rooms = useSelector((state)=> state.videoRooms.rooms)
    console.log(`rooms at the createRoomButton`,rooms)


    const handleRoomCreate = ()=>{
        if(inRoom){
            return alert("You are already in the room!!!")
        }
        createVideoRoom()
    }

  return (
    <img className='w-[45px] h-[45px] mr-[15px]' src={callIcon} onClick={handleRoomCreate}/>
      
  )
}

export default CreateRoomButton
