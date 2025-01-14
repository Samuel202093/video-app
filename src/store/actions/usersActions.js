import store from "../store"
import { setOnlineUsers,  removeDisconnectedUsers} from "../../MapPage/mapSlice"



export const onlineUsersHandler = (socketId, usersData)=>{
    const usersDataArray = Object.values(usersData)
    // console.log(`typeOf usersData in the onlineUsersHandler: ${typeof(usersDataArray)}`)
    store.dispatch(setOnlineUsers(usersDataArray.map((user)=>{
        if (user.socketId === socketId){
           user.myself = true;
        }
        return user;
    })))
} 

export const userDisconnectedHandler = (disconnectedUserSocketId)=>{
    store.dispatch(removeDisconnectedUsers(disconnectedUserSocketId)); 
}