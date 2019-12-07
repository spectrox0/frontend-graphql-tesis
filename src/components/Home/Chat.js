import React, { useState, useEffect } from "react";
import InputMessage from "./inputMessage";
import Navbar from "./NavBar";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Messages from "./Messages";
import Spinner from "./../spinner";
import { QUERY_POST } from "../../helpers/graphql/querys/querys";
export default function Chat({ onClick, postId }) {
  const [Post, { data, loading, error }] = useLazyQuery(QUERY_POST);

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
      {data && !loading && <Messages />}
      {loading && (
        <div className="initMessage">
          {" "}
          <Spinner />
        </div>
      )}
      {!data && !loading && <div className="initMessage">Welcome </div>}
      <InputMessage />
    </div>
  );
}
