import React, { useContext, useEffect } from "react";
import InputMessage from "./inputMessage";
import Navbar from "./NavBar";
import CardMessage from "./../Cards/CardMessage";
import { useSelector } from "react-redux";

export default function Messages({ messages, postId, subscribeToNewMessages }) {
  const { userId } = useSelector(state => ({
    ...state.User
  }));
  const options = {
    timeZone: "UTC",
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  };

  useEffect(() => {
    document.getElementById("messages").scrollTop = 9999999;
  });
  useEffect(() => {
    subscribeToNewMessages();
  });
  const Message = ({ messages }) => {
    return messages.map(message => (
      <CardMessage
        key={message._id}
        userId={userId}
        options={options}
        {...message}
      />
    ));
  };

  return (
    <div id="messages" className="messages scroll ">
      {userId && <Message messages={messages} />}
    </div>
  );
}
