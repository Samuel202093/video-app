import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
    inRoom: null,
    rooms: [],
    localStream: null,
    remoteStream: null,
    currentUserId: null,
    isLocalMicOn: true,
    isLocalCameraOn: true,
    isRemoteCameraOn: true,
    isRemoteMicOn: true,
    isInitiator: false
};


export const videoRoomSlice = createSlice({
    name: "videoRooms",
    initialState, 
    reducers:{
        setInRoom: (state, action)=>{
            state.inRoom = action.payload
        },
        setRooms: (state, action)=>{
            state.rooms = action.payload
        },  
        setCurrentUserId: (state, action)=>{
            state.currentUserId = action.payload
        },
        setLocalStream: (state, action)=>{
            state.localStream = action.payload
        },
        setRemoteStream: (state, action)=>{
            state.remoteStream = action.payload
        },
        setLocalIsMicOn: (state, action)=>{
            state.isLocalMicOn = action.payload
        },
        setLocalIsCameraOn:(state, action)=>{
            state.isLocalCameraOn = action.payload
        },
        setRemoteIsMicOn: (state, action)=>{
            state.isRemoteMicOn = action.payload
        },
        setIsRemoteCameraOn: (state, action)=>{
            state.isRemoteCameraOn = action.payload
        },
        setInitiator: (state, action)=>{
            state.isInitiator = action.payload
        }
    }
})


export const { setInRoom, setRooms, setLocalStream, setRemoteStream, setLocalIsMicOn, setLocalIsCameraOn, setIsRemoteCameraOn, setRemoteIsMicOn, setInitiator, setCurrentUserId } = videoRoomSlice.actions;

export default videoRoomSlice.reducer;