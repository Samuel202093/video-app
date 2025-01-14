import React from 'react'
import { joinVideoRoom } from '../store/actions/videoRoomActions'
import { useSelector } from 'react-redux'

const RoomJoinButton = ({creatorUsername, roomId, amountOfParticipants}) => {
    const inRoom = useSelector((state)=> state.videoRooms.inRoom)

    const handleJoinRoom = ()=>{
        if(inRoom){
            return alert("Already in room!!")
        }

        // if(amountOfParticipants > 1){
        //     return alert("Room is full!!!")
        // }
        joinVideoRoom(roomId);
    }

  return (
    <button className='bg-green-600 px-4 py-2 text-white rounded-full font-bold' onClick={handleJoinRoom}>
        {/* {creatorUsername[0]} */}
        Accept Video Call
    </button>
  )
}

export default RoomJoinButton
