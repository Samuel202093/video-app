import React from 'react'
import disconnectIcon from "../resources/images/75 - call-disconnect-icon.svg"
import { leaveVideoRoom } from '../store/actions/videoRoomActions'
import micIcon from "../resources/images/75 - mic-icon.svg"
import micOffIcon from "../resources/images/75 - mic-off-icon.svg"
import cameraIcon from "../resources/images/75 - camera-icon.svg"
import cameraOffIcon from "../resources/images/75 - camera-off-icon.svg"
import { useSelector, useDispatch } from 'react-redux'
// import { setIsCameraOn, setIsMicOn } from '../realtimeCommunication/videoRoomSlice'


const VideoRoomButtons = ({inRoom}) => {
const isMicOn = useSelector((state)=> state.videoRooms.isMicOn)
const isCameraOn = useSelector((state)=> state.videoRooms.isCameraOn)
const localStream = useSelector((state)=> state.videoRooms.localStream)
const remoteStream = useSelector((state)=> state.videoRooms.remoteStream)

const dispatch = useDispatch()

const handleMuteUnmuteChange = ()=>{
  if(localStream){
    localStream.getAudioTracks()[0].enabled = !(localStream.getAudioTracks()[0].enabled)
  // dispatch(setIsMicOn(!isMicOn))
  }

  if(remoteStream){
    remoteStream.getAudioTracks()[0].enabled = !(remoteStream.getAudioTracks()[0].enabled)
  // dispatch(setIsMicOn(!isMicOn))
  }
  
}

const handleCameraOnOffChange = ()=>{
  if(localStream){
    localStream.getVideoTracks()[0].enabled = !(localStream.getVideoTracks()[0].enabled)
    // dispatch(setIsCameraOn(!isCameraOn))
  }

  if(remoteStream){
    remoteStream.getVideoTracks()[0].enabled = !(remoteStream.getVideoTracks()[0].enabled)
    // dispatch(setIsCameraOn(!isCameraOn))
  }

}
  const handleLeaveRoom = ()=>{
    leaveVideoRoom(inRoom)
  }


  return (
    <div className='flex justify-evenly border-[2px]y border-purple-900y mt-4'>
      <button onClick={handleMuteUnmuteChange} className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold'>
        <img src={isMicOn ? micIcon : micOffIcon} className='font-bold' width="25px" height="25px" />
      </button>
      <button className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold' onClick={handleLeaveRoom}>
        <img src={disconnectIcon} className='font-bold' width="25px" height="25px"/>
      </button>
      <button onClick={handleCameraOnOffChange} className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold'>
      <img src={isCameraOn ? cameraIcon : cameraOffIcon} className='font-bold' width="25px" height="25px" />
      </button>
    </div>
  )
}

export default VideoRoomButtons
