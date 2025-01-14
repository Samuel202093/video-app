import React from 'react'
import { useSelector } from 'react-redux'
import Video from './Video'
import VideoRoomButtons from './VideoRoomButtons'
import LocalStreamVideo from './LocalStreamVideo'
import RemoteStreamVideo from './RemoteStreamVideo'

const ParticipantsVideos = () => {
    const inRoom = useSelector((state)=> state.videoRooms.inRoom)
    const initiator = useSelector((state)=> state.videoRooms.isInitiator)
    const localStream = useSelector((state)=> state.videoRooms.localStream)
    const remoteStream = useSelector((state)=> state.videoRooms.remoteStream)

    console.log(`localStream: ${JSON.stringify(localStream)}`)
    console.log(`remoteStream: ${JSON.stringify(remoteStream)}`)

  return (
    <div className='absolute bottom-[65%] right-3 h-[35px] w-[25%] border-[2px] border-red-800'>
      {/* {inRoom && localStream && <Video stream={localStream} muted/> } */}
      {inRoom && <LocalStreamVideo stream={localStream} inRoom={inRoom} muted/>}
      <br/>
      {/* {inRoom && remoteStream && <Video stream={remoteStream} muted/>} */}
      {inRoom && remoteStream && <RemoteStreamVideo stream={remoteStream} inRoom={inRoom} muted initiator={initiator}/>}

      {/* {inRoom && <VideoRoomButtons inRoom={inRoom}/>} */}

    </div>
  )
}

export default ParticipantsVideos
