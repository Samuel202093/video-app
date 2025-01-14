import React from "react";
import chatIcon from "../../resources/images/36 - chat-icon.svg";
import { useDispatch } from "react-redux";
import { addChatbox } from "../../Messenger/messengerSlice";

const ChatButton = ({ socketId, username }) => {
  const dispatch = useDispatch();

  const handleAddChatBox = () => {
    dispatch(
      addChatbox({
        username,
        socketId,
      })
    ); //addChatbox is coming from the redux store and it is logic for adding a chat
  };

  return (
    <img
      src={chatIcon}
      className="w-[45px] h-[45px] mr-2 cursor-pointer"
      onClick={handleAddChatBox}
    ></img>
  );
};

export default ChatButton;
