import React,{ useEffect, useRef } from 'react'
import VideoRoomButtons from './VideoRoomButtons';
import disconnectIcon from "../resources/images/75 - call-disconnect-icon.svg"
import { leaveVideoRoom } from '../store/actions/videoRoomActions'
import micIcon from "../resources/images/75 - mic-icon.svg"
import micOffIcon from "../resources/images/75 - mic-off-icon.svg"
import cameraIcon from "../resources/images/75 - camera-icon.svg"
import cameraOffIcon from "../resources/images/75 - camera-off-icon.svg"
import { useSelector, useDispatch } from 'react-redux'
import { setLocalIsCameraOn, setLocalIsMicOn } from '../realtimeCommunication/videoRoomSlice'


const LocalStreamVideo = ({stream, muted, inRoom}) => {
    const isLocalMicOn = useSelector((state)=> state.videoRooms.isLocalMicOn)
    const isLocalCameraOn = useSelector((state)=> state.videoRooms.isLocalCameraOn)
    const localStream = useSelector((state)=> state.videoRooms.localStream)

    const dispatch = useDispatch()
     const videoEl = useRef();


     const handleLocalMuteUnmuteChange = ()=>{
         localStream.getAudioTracks()[0].enabled = !(localStream.getAudioTracks()[0].enabled)
       dispatch(setLocalIsMicOn(!isLocalMicOn))

     }
     
     const handleLocalCameraOnOffChange = ()=>{
         localStream.getVideoTracks()[0].enabled = !(localStream.getVideoTracks()[0].enabled)
         dispatch(setLocalIsCameraOn(!isLocalCameraOn))
     }

       const handleLeaveRoom = ()=>{
         leaveVideoRoom(inRoom)
       }
        
        useEffect(()=>{
            const video = videoEl.current
            video.srcObject = stream
            video.onloadedmetadata = ()=>{
                video.play()
            }
        }, [stream])

  return (
    <div>
      <video ref={videoEl} width="98%" height="98%" playsInline autoPlay muted={muted}/>
      {/* <VideoRoomButtons inRoom={inRoom}/> */}
      {/* video room buttons for localStream */}

       <div className='flex justify-evenly border-[2px]y border-purple-900y mt-4'>
            <button onClick={handleLocalMuteUnmuteChange} className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold'>
              <img src={isLocalMicOn ? micIcon : micOffIcon} className='font-bold' width="25px" height="25px" />
            </button>
            <button className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold' onClick={handleLeaveRoom}>
              <img src={disconnectIcon} className='font-bold' width="25px" height="25px"/>
            </button>
            <button onClick={handleLocalCameraOnOffChange} className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold'>
            <img src={isLocalCameraOn ? cameraIcon : cameraOffIcon} className='font-bold' width="25px" height="25px" />
            </button>
          </div>

    </div>
  )
}

export default LocalStreamVideo
