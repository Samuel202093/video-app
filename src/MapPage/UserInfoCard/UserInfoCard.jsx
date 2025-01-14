import React from 'react'
import { useSelector } from 'react-redux'
import { calculateDistanceBetweenCoords } from '../../utils/location'
import ActionButtons from '../UserInfoCard/ActionButtons'



const Label = ({fontSize, text})=>{
    return(
        <p style={{fontSize}}>{text}</p>
    )
}

const UserInfoCard = ({username, userLocation, socketId}) => {
    // getting the user's location from the redux store
    const myLocation = useSelector((state) => state.map.myLocation);

  return (
    <div className='absolute top-6 border-[2px] border-red-700 w-[25%] h-[10vh] bg-slate-50'>
      <Label text={username} fontSize='16px'/>
      <Label fontSize='14px' text={`${calculateDistanceBetweenCoords(myLocation, userLocation)}km`}/>

      <ActionButtons socketId={socketId} username={username}/>
    </div>
  )
}

export default UserInfoCard
