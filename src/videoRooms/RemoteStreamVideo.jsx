import React, { useRef, useEffect} from 'react'
// import VideoRoomButtons from './VideoRoomButtons';
import disconnectIcon from "../resources/images/75 - call-disconnect-icon.svg"
import { leaveVideoRoom } from '../store/actions/videoRoomActions'
import micIcon from "../resources/images/75 - mic-icon.svg"
import micOffIcon from "../resources/images/75 - mic-off-icon.svg"
import cameraIcon from "../resources/images/75 - camera-icon.svg"
import cameraOffIcon from "../resources/images/75 - camera-off-icon.svg"
import { useSelector, useDispatch } from 'react-redux'
import { setIsRemoteCameraOn, setRemoteIsMicOn } from '../realtimeCommunication/videoRoomSlice'

const RemoteStreamVideo = ({stream, muted, inRoom, initiator}) => {
    const isRemoteMicOn = useSelector((state)=> state.videoRooms.isRemoteMicOn)
    const isRemoteCameraOn = useSelector((state)=> state.videoRooms.isRemoteCameraOn)

    const dispatch = useDispatch()
     const videoEl = useRef();
    

    const handleRemoteMuteUnmuteChange = ()=>{
        remoteStream.getAudioTracks()[0].enabled = !(remoteStream.getAudioTracks()[0].enabled)
      dispatch(setRemoteIsMicOn(!isRemoteMicOn))
 
    }
    
    const handleRemoteCameraOnOffChange = ()=>{
        if(remoteStream){
        remoteStream.getVideoTracks()[0].enabled = !(remoteStream.getVideoTracks()[0].enabled)
        dispatch(setIsRemoteCameraOn(!isRemoteCameraOn))
    }
    }
    
      const handleLeaveRoom = ()=>{
        leaveVideoRoom(inRoom)
      }
            
            useEffect(()=>{
                const video = videoEl.current
                // starting the video manually in some browsers
                if (stream) {
                video.srcObject = stream

                    video.onloadedmetadata = ()=>{
                        video.play()
                    } 
                }   
            }, [stream])


  return (
    <div>
       <video ref={videoEl} width="98%" height="98%" playsInline autoPlay muted={muted} />

        {/* video room buttons for localStream */}
       {/* <VideoRoomButtons inRoom={inRoom}/> */}

       { initiator && <div className='flex justify-evenly border-[2px]y border-purple-900y mt-4'>
             <button onClick={handleRemoteMuteUnmuteChange} className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold'>
               <img src={isRemoteMicOn ? micIcon : micOffIcon} className='font-bold' width="25px" height="25px" />
             </button>
             <button className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold' onClick={handleLeaveRoom}>
               <img src={disconnectIcon} className='font-bold' width="25px" height="25px"/>
             </button>
             <button onClick={handleRemoteCameraOnOffChange} className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold'>
             <img src={isRemoteCameraOn ? cameraIcon : cameraOffIcon} className='font-bold' width="25px" height="25px" />
             </button>
        </div>}

       {/* <div className='flex justify-evenly border-[2px]y border-purple-900y mt-4'>
             <button onClick={handleRemoteMuteUnmuteChange} className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold'>
               <img src={isRemoteMicOn ? micIcon : micOffIcon} className='font-bold' width="25px" height="25px" />
             </button>
             <button className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold' onClick={handleLeaveRoom}>
               <img src={disconnectIcon} className='font-bold' width="25px" height="25px"/>
             </button>
             <button onClick={handleRemoteCameraOnOffChange} className='flex justify-center items-center w-[50px] h-[50px] rounded-[50px] bg-teal-500 text-base border-none transition-[0.3s] font-bold'>
             <img src={isRemoteCameraOn ? cameraIcon : cameraOffIcon} className='font-bold' width="25px" height="25px" />
             </button>
        </div> */}

    </div>
  )
}

export default RemoteStreamVideo
