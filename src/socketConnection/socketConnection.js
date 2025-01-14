import io from "socket.io-client"
import { onlineUsersHandler, userDisconnectedHandler } from "../store/actions/usersActions";
import { chatMessageHandler } from "../store/actions/messengerActions";
import { videoRoomsListHandler } from "../store/actions/videoRoomActions";
import { call, disconnect } from "../realtimeCommunication/webRTCHandler";
// import { getAccessToLocalStream } from "../realtimeCommunication/webRTCHandler";
// import store from "../store/store";

let socket = null;


export const connectWithSocketIOServer = ()=>{
    // socket = io("http://localhost:9005")
    socket = io("https://55cd-105-116-3-124.ngrok-free.app/")

    socket.on("connect", () => {
        console.log("Connected to the server")
    })

    // emitting the online-users event
    socket.on("online-users", (usersData)=>{
        // console.log("Received online-users event", usersData)
        console.log("check usersData:",usersData)
        onlineUsersHandler(socket.id, usersData)
    })

    // emitting the chat-message event and sending the message to the receiver
    socket.on("chat-message", (messageData)=>{
        console.log("message recieved", messageData)
        chatMessageHandler(messageData)
    
    })

    // emitting the video-room event
    socket.on("video-rooms", (videoRooms)=>{
        console.log("new list of rooms recived")
        videoRoomsListHandler(videoRooms)
    })


    socket.on("video-room-init", (data)=>{
        call(data)
    }) 


    socket.on("video-call-disconnect", ()=>{
        disconnect()
    })


    socket.on("user-disconnected",(disconnectedUserSocketId)=>{
        userDisconnectedHandler(disconnectedUserSocketId)
    })
}


export const login = (data)=>{
    socket.emit("user-login", data);
    console.log(data)
}

export const sendChatMessage = (data)=>{
    socket.emit("chat-message", data);
}


// emmitting the video-room-create event from the server
export const createVideoRoom = (data)=>{
    //passing the video-room-create event with the data to the server
    socket.emit("video-room-create", data)
}


//joining the video room when the event is been emmitted from the server
export const joinVideoRoom = (data)=>{
    console.log("emitting event to join a room", data)
    socket.emit("video-room-join", data)
}


// emitting an event of leaving a room
export const leaveVideoRoom = (data)=>{
    socket.emit("video-room-leave", data)
}


