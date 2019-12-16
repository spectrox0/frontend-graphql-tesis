import React, { useContext, useEffect } from "react";
import InputMessage from "./inputMessage";
import Navbar from "./NavBar";
import CardMessage from "./../Cards/CardMessage";
import { MDBBtn, MDBRow } from "mdbreact";
import { useSelector } from "react-redux";

export default function Messages({
  messages,
  subscribeToNewMessages,
  moreMessages
}) {
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
    <>
      <div id="messages" className="messages scroll ">
        {messages && (
          <>
            <Message messages={messages} />{" "}
            <MDBRow>
              {" "}
              <MDBBtn
                className="btn-view-more"
                onClick={() => moreMessages(messages[messages.length - 1]._id)}
              >
                {" "}
                Ver más{" "}
              </MDBBtn>{" "}
            </MDBRow>
          </>
        )}
      </div>
    </>
  );
}
