import React, { useContext, useEffect } from "react";

import CardMessage from "./../Cards/CardMessage";
import { MDBBtn, MDBRow } from "mdbreact";
import { useSelector } from "react-redux";
import Spinner from "../spinner";

export default function Messages({
  messages,
  subscribeToNewMessages,
  moreMessages,
  loading,
  hasNextPage
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
  }, [subscribeToNewMessages]);
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
            <MDBRow style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              {loading && hasNextPage && <Spinner />}
              {!loading && hasNextPage && (
                <MDBBtn
                  className="btn-view-more"
                  onClick={() =>
                    moreMessages(messages[messages.length - 1]._id)
                  }
                >
                  Ver más
                </MDBBtn>
              )}
            </MDBRow>
          </>
        )}
      </div>
    </>
  );
}
