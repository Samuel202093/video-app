import { setLocalStream, setRemoteStream } from "./videoRoomSlice";
import store from "../store/store"
import { Peer } from "peerjs"

let peer;
let peerId;

export const getPeerId = ()=>{
    return peerId;
}
 

export const getAccessToLocalStream = async ()=>{
    const localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    })

    if(localStream){
        // console.log("localStream", localStream)
        store.dispatch(setLocalStream(localStream))
    }

    return Boolean(localStream)
}


export const connectWithPeerServer = ()=>{
    //passing undefined as the first argument to the constructor will make peerjs to generate a new peerId
    //Note: PeerJs is used to establish direct connection between two users for video streaming purposes but it is connected to server in the backend of the peer server

    peer = new Peer(undefined, {
        host: 'localhost',
        port: 9000,
        path: '/peer' 
    })

    peer.on('open', (id) => {
        console.log('My peer ID is: ' + id)
        peerId = id
    })

    // recieving the call event from another user or awaiting for any connection(i.e call event ) from any user
    peer.on("call", async(call)=>{

        //getting the localStream from our redux
        const localStream = store.getState().videoRooms.localStream

        call.answer(localStream) // answering the call with A/V stream

        call.on("stream", (remoteStream)=>{
            console.log("remote stream came")
            store.dispatch(setRemoteStream (remoteStream))
        })
    })
}

// the user that is initiating the stream or call
export const call = (data)=>{
    const { newParticipantPeerId } = data

    // getting the local stream from the redux 
    const localStream = store.getState().videoRooms.localStream

    const peerCall = peer.call(newParticipantPeerId, localStream)

    peerCall.on("stream", (remoteStream)=>{
        console.log("remote stream came 2 oh!!!!!")
        store.dispatch(setRemoteStream(remoteStream) )
    })
}

export const disconnect = ()=>{
    // closing all peer connections

    for(let conns in peer.connections){
        // closing the peer connection for the second user 
        peer.connections[conns].forEach((c)=>{
            console.log("closing connection for c:", c);
            c.peerConnection.close()

            if(c.close){
                c.close()
            }
        })
    }

    store.dispatch(setRemoteStream(null))
}