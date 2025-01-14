import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMyLocation } from '../MapPage/mapSlice'
import { getFakeLocation } from '../data/fakeLocation'
import { connectWithSocketIOServer } from '../socketConnection/socketConnection'
import { proceedWithLogin } from '../store/actions/loginPageActions'
import { connectWithPeerServer } from '../realtimeCommunication/webRTCHandler'


const Login = () => {
    const[username, setUsername] = useState('')
    const [locationError, setLocationError] = useState(false)

    const myLocation = useSelector((state) => state.map.myLocation)

    const navigate = useNavigate()
    const dispatch = useDispatch()



    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const isUsernameValid = (username) =>{
        return username.length > 0 && username.length < 10 && !username.includes(' ')
    }

    const locationOptions = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
    }

    const handleLogin = (e)=>{
        e.preventDefault()
        console.log('Username:', username)
        // alert('Login successful!')
        proceedWithLogin({ username, coords:{
            lng: myLocation.lng,
            lat: myLocation.lat
        }})
        navigate('/map')
 
    }


    const onSuccess = (position)=>{
        const {latitude, longitude} = position.coords
        console.log('user\'s location:', latitude, longitude)
        // console.log(position)
        dispatch(setMyLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            
        }))
    }

    const onError = (error)=>{
        console.log('error occurred when fetching position:', error)
        setLocationError(true)
    }

    useEffect(()=>{
        // navigator.geolocation.getCurrentPosition(onSuccess, onError, locationOptions)

        onSuccess(getFakeLocation())
    },[])

    useEffect(()=>{
        if(myLocation){
            connectWithSocketIOServer()
            connectWithPeerServer()
        }
    },[myLocation])

  return (
    <form className='flex flex-col gap-3 justify-center items-center border-[1px] border-[rgba(0,0,0,0.3)] md:w-[35%] w-[98%] p-3 mx-auto my-[3rem] rounded-md'>
      <h2>Login Page</h2>
       
      <div className='border-2y border-red-500y w-[100%]'>
        <input type="text" className='border-[1px] text-sm rounded-md pl-4 w-full h-md:[7vh] h-[5vh] focus-within:outline-none' name="username" value={username} placeholder='Please enter your username' onChange={handleUsernameChange}/>
      </div>

      <div>
        <button className='bg-green-600 px-4 py-[0.35rem] font-bold text-white rounded-md' disabled={!isUsernameValid(username) || locationError } onClick={handleLogin}>login</button>
      </div>
    </form>
  )
}

export default Login
