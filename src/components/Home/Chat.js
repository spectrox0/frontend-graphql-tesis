import React, { useState, useEffect } from "react";
import InputMessage from "./inputMessage";
import Navbar from "./NavBar";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Messages from "./Messages";
import Spinner from "./../spinner";
import {
  QUERY_POST,
  QUERY_MESSAGES
} from "../../helpers/graphql/querys/querys";
import { MESSAGE_ADDED_SUBSCRIPTION } from "../../helpers/graphql/subscription/subcription";
import { useSelector, useDispatch } from "react-redux";

export default function Chat() {
  /*const [
    Post,
    { data, subscribeToMore, loading, error }
  ] = useLazyQuery(QUERY_POST, { fetchPolicy: "cache-and-network" });*/
  const { postId, title, urlImg, creator } = useSelector(state => ({
    ...state.Post
  }));
  const [
    MessagesQuery,
    { data, subscribeToMore, loading, error, fetchMore }
  ] = useLazyQuery(QUERY_MESSAGES, { fetchPolicy: "cache-and-network" });

  const dispatch = useDispatch();
  const subscribeToNewMessages = () =>
    subscribeToMore({
      document: MESSAGE_ADDED_SUBSCRIPTION,
      variables: { postId: postId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newMessage = subscriptionData.data.messageAdded;
        if (!prev.messages.find(msg => msg._id === newMessage._id)) {
          const res = Object.assign({}, prev, {
            messages: [newMessage, ...prev.messages]
          });
          return res;
        } else return prev;
      }
    });
  const moreMessages = cursor =>
    fetchMore({
      variables: {
        postId: postId,
        first: 5,
        after: cursor
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          messages: [...prev.messages, ...fetchMoreResult.messages]
        });
      }
    });
  useEffect(() => {
    if (postId) {
      MessagesQuery({
        variables: {
          postId: postId,
          first: 20
        }
      });
    }
  }, [MessagesQuery, postId]);

  const onClick = () => {
    dispatch({
      type: "TOGGLE"
    });
  };
  return (
    <div className="chat">
      <Navbar title={title} urlImg={urlImg} onClick={onClick} />
      {data && (
        <Messages
          subscribeToMore={subscribeToMore}
          postId={postId}
          moreMessages={moreMessages}
          messages={data.messages}
          subscribeToNewMessages={subscribeToNewMessages}
        />
      )}
      {!data && loading && (
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
