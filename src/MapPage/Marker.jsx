import React, { useEffect } from 'react'
import locationIcon from '../resources/images/30 - location-icon.svg'
import { useDispatch } from 'react-redux';
import { setCardChosenOption } from './mapSlice';

const Marker = (props) => {
    const { myself,  socketId, username, coords, lat, lng } = props;

    const dispatch = useDispatch();


    const handleOptionChoose = ()=>{
      // console.log(`testing the handleOptionChoose method: ${socketId}`)
      if (!myself) {
        // alert('testing the handle')
        dispatch(setCardChosenOption({
          socketId: socketId,
          username: username,
          coords: coords
        }))
      }
    }

  //   console.log("Marker Props:", {
  //     myself,
  //     socketId,
  //     username,
  //     coords,
  //     shouldShowMe: myself === true
  // });


  return (
    <div    style={{ 
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer',
      zIndex: 1
    }}   onClick={handleOptionChoose}>
        <img src={locationIcon} alt={username} width={30} className=''/>

        <p className="text-white text-center">
          {myself ? "Me" : username}
        </p>

    </div> 
  )
}

export default Marker
