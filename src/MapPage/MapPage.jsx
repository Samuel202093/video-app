import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import Marker from "./Marker";
import UserInfoCard from "./userInfoCard/UserInfoCard";
import Messenger from "../Messenger/Messenger";
import VideoRooms from "../videoRooms/videoRooms";


const MapPage = () => {
  const myLocation = useSelector((state) => state.map.myLocation);
  const onlineUsers = useSelector((state) => state.map.onlineUsers);
  const cardChosenOption = useSelector((state) => state.map.cardChosenOption);

  // Ensure onlineUsers is always an array
  const onlineUsersArray = Array.isArray(onlineUsers)
    ? onlineUsers
    : Object.values(onlineUsers);


  console.log(`online users: ${JSON.stringify(onlineUsersArray)}`);
  console.log(`online users type: ${typeof onlineUsersArray}`);

  const defaultMapProps = {
    center: {
      lat: myLocation.lat,
      lng: myLocation.lng,
    },
    zoom: 11,
  };
  return (
    <div
      className="border-[2px]y border-red-500y"
      style={{ height: "100vh", width: "100%" }}
    >
      <h1>Map page</h1>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCstbyXKmQJfs3-Si9gPLk1pzoMJda1RUc" }}
        center={defaultMapProps.center}
        zoom={defaultMapProps.zoom}
      >
        {onlineUsersArray.map((onlineUser) => {
          return (
            <Marker
              lat={onlineUser.coords.lat}
              lng={onlineUser.coords.lng}
              key={onlineUser.socketId}
              myself={onlineUser.myself}
              socketId={onlineUser.socketId}
              username={onlineUser.username}
              coords={onlineUser.coords}
            />
          );
        })}
      </GoogleMapReact>

      <Messenger />

      {cardChosenOption && (
        <UserInfoCard
          socketId={cardChosenOption.socketId}
          username={cardChosenOption.username}
          userLocation={cardChosenOption.coords}
        />
      )}

      <VideoRooms />
    </div>
  );
};

export default MapPage;
