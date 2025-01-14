import React, { useState } from "react";
import { sendChatMessage } from "../../store/actions/messengerActions";
import { useSelector } from "react-redux";

const NewMessage = ({ socketId }) => {
  const [message, setMessage] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false)

  const onlineUsers = useSelector((state)=> state.map.onlineUsers)

  const handleMessageValueChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.code === "Enter" && message.length > 0) {
      // console.log("sending message to the server");
      proceedChatMessage();
      setMessage("");
    }
  };

  const proceedChatMessage = () => {
    // console.log("sending message to the reciever", message);
    if(onlineUsers.find((user)=> user.socketId === socketId)){
      sendChatMessage(socketId, message)
    }else{
      setInputDisabled(true)
    }
    
  };

  return (
    <div className="w-full min-h-[40px] border-t-[1px] border-t-[#E5E5E5]">
      <input
        type="text"
        placeholder="Type your message ..."
        className="w-[80%] h-full border-none outline-none bg-white text-base pl-4"
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
        disabled={inputDisabled}
      />
    </div>
  );
};

export default NewMessage;
