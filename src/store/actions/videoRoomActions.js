import { v4 as uuid } from 'uuid'
import { setInRoom, setRooms } from '../../realtimeCommunication/videoRoomSlice'
import store from "../store"
import * as socketConn from '../../socketConnection/socketConnection'
import { getAccessToLocalStream, getPeerId, disconnect } from '../../realtimeCommunication/webRTCHandler'

export const createVideoRoom = async ()=>{
    // getting access to local streams
    const success = getAccessToLocalStream()

    if(success){

        //creating a room id using uuid package
        const newRoomId = uuid()

        //setting the inRoom value to the value of the uuid package  Note: the value of inRoom is null from the redux state
        store.dispatch(setInRoom(newRoomId));
    
        // passing the peerId and the roomId to the server through the createVideoRoom function.
        socketConn.createVideoRoom({
            peerId: getPeerId(),
            newRoomId
        })
    }
}

//joining a video call
export const joinVideoRoom =  async(roomId) =>{
    // get access to the local stream
    const success = await getAccessToLocalStream()

    if(success){
        store.dispatch(setInRoom(roomId))

        socketConn.joinVideoRoom({
            roomId,
            peerId: getPeerId()
        })
    }
}

//dispatching the setRooms actions from the redux state for video rooms
export const videoRoomsListHandler = (videoRooms) =>{
    store.dispatch(setRooms(videoRooms))
} 


// leaving the video room
export const leaveVideoRoom = (roomId)=>{
    disconnect()
    socketConn.leaveVideoRoom({
        roomId
    })

    store.dispatch(setInRoom(false))
}