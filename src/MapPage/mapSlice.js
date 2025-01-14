import { createSlice } from '@reduxjs/toolkit'


//defining the initial state
const initialState = {
    myLocation: null,
    onlineUsers: [],
    cardChosenOption: null
}

// creating the reducer function
export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setMyLocation: (state, action)=>{
            console.log('Payload for setMyLocation:', action.payload);
            state.myLocation = action.payload
        },
        setOnlineUsers: (state, action)=>{
            console.log('Payload for setOnlineUsers:', action.payload);
            state.onlineUsers = action.payload
        },
        removeDisconnectedUsers: (state, action)=>{
            state.onlineUsers = state.onlineUsers.filter((onlineUser)=> onlineUser.socketId !== action.payload)
        },
        setCardChosenOption: (state, action)=>{
            console.log('payload for card chosen option', action.payload)
            state.cardChosenOption = action.payload
        }
    }
})

// exporting the actions and the reducer
export const { setMyLocation, setOnlineUsers, removeDisconnectedUsers, setCardChosenOption } = mapSlice.actions;

export default mapSlice.reducer;
