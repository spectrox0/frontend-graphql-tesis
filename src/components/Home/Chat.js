import React, { useState, useEffect } from "react";
import InputMessage from "./inputMessage";
import Navbar from "./NavBar";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Messages from "./Messages";
import Spinner from "./../spinner";
import { QUERY_POST } from "../../helpers/graphql/querys/querys";
import { MESSAGE_ADDED_SUBSCRIPTION } from "../../helpers/graphql/subscription/subcription";
export default function Chat({ onClick, postId }) {
  const [Post, { data, subscribeToMore, loading, error }] = useLazyQuery(
    QUERY_POST
  );
  const subscribeToNewMessages = () =>
    subscribeToMore({
      document: MESSAGE_ADDED_SUBSCRIPTION,
      variables: { postId: postId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newMessage = subscriptionData.data.messageAdded;
        if (!prev.post.messages.find(msg => msg._id === newMessage._id)) {
          const res = Object.assign({}, prev, {
            post: {
              ...prev.post,
              messages: [...prev.post.messages, newMessage]
            }
          });
          return res;
        } else return prev;
      }
    });
  useEffect(() => {
    if (postId) {
      Post({
        variables: {
          _id: postId
        }
      });
    }
  }, [Post, postId]);
  return (
    <div className="chat">
      <Navbar
        title={data ? data.post.title : null}
        urlImg={data ? data.post.urlImg : null}
        onClick={onClick}
      />
      {data && !loading && (
        <Messages
          subscribeToMore={subscribeToMore}
          postId={postId}
          messages={data.post.messages}
          subscribeToNewMessages={subscribeToNewMessages}
        />
      )}
      {loading && (
        <div className="initMessage">
          {" "}
          <Spinner />
        </div>
      )}
      {!data && !loading && <div className="initMessage">Welcome </div>}
      <InputMessage postId={postId} />
    </div>
  );
}
