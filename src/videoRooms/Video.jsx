import React, { useRef, useEffect } from 'react'

const Video = ({stream, muted }) => {
    const videoEl = useRef();
    
    useEffect(()=>{
        const video = videoEl.current

        video.srcObject = stream

        // starting the video manually in some browsers
        video.onloadedmetadata = ()=>{
            video.play()
        }
    }, [stream])

  return (
    <div>
      <video ref={videoEl} width="98%" height="98%" playsInline autoPlay muted={muted}/>
    </div>
  )
}

export default Video
