import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CreateRoomButton from './CreateRoomButton'
import RoomJoinButton from './RoomJoinButton'
import ParticipantsVideos from './ParticipantsVideos'
import { setCurrentUserId } from '../realtimeCommunication/videoRoomSlice'



const DUMMY_ROOMS = [
    {
        id: 1,
        participants:[
            {
                socketId: 1,
                peerId: 1,
                username: 'Martin'
            }
        ]
    },
    {
        id: 2,
        participants:[
            {
                socketId: 2,
                peerId: 2,
                username: 'John'
            }
        ]
    }
]



const RoomsList = ()=>{
const rooms = useSelector((store)=> store.videoRooms.rooms)
const  currentUserId = useSelector((store)=> store.videoRooms.currentUserId)
const dispatch = useDispatch()

const convertRoomsToArray = (videoRooms)=>{
    const rooms = [];

    Object.entries(videoRooms).forEach(([key, value])=>{
        rooms.push({
            id: key,
            creatorUsername: value.participants[0].username,
            amountOfParticipants: value.participants.length
        })
    })


    // dispatch(setCurrentUserId(rooms[0].id))

    console.log(currentUserId)

    // console.log(`rooms in the convertRoomsToArray: ${JSON.stringify(rooms[0].id)}`)
    return rooms;

}

console.log("rooms in the room list", JSON.stringify(rooms))

    return (
        <div className='flex flex-row-reverse gap-3 absolute bottom-1 right-[3.2rem] cursor-pointer'>
            <CreateRoomButton />

            {convertRoomsToArray(rooms).map(room => <RoomJoinButton
            key={room.id} creatorUsername={room.creatorUsername} roomId={room.id} amountOfParticipants={room.amountOfParticipants} />)}
        </div>
    )
}

const VideoRooms = () => {
  return (
    <>
        <RoomsList />
        <ParticipantsVideos />
    </>
  )
}

export default VideoRooms
