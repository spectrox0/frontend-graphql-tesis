import React, { useState, useEffect } from "react";
import { CURRENT_USER } from "./graphql/querys/querys";
import { useLazyQuery } from "@apollo/react-hooks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Routes from "./routes/Routes";

export default function IsAuth() {
  const [
    CurrentUser,
    { data, loading, error, refetch, updateQuery }
  ] = useLazyQuery(CURRENT_USER, { fetchPolicy: "cache-and-network" });

  const { token } = useSelector(state => ({
    ...state.User
  }));
  const dispatch = useDispatch();
  const addPostUser = post => {
    updateQuery(({ currentUser }) => {
      const res = Object.assign({}, currentUser, {
        currentUser: {
          ...currentUser,
          posts: [...currentUser.posts, post]
        }
      });
      return res;
    });
  };

  useEffect(() => {
    const response = localStorage.getItem("token");
    if (response) {
      CurrentUser();
    }
  }, [CurrentUser, token]);

  useEffect(() => {
    if (data && data.currentUser) {
      const response = localStorage.getItem("token");
      dispatch({
        type: "CURRENT_USER",
        payload: {
          token: response,
          username: data.currentUser.username,
          userImg: data.currentUser.urlImg,
          name: data.currentUser.name,
          posts: data.currentUser.posts,
          userId: data.currentUser._id
        }
      });
    }
  }, [data, dispatch, token]);

  return (
    !loading && (
      <Routes
        updateUser={addPostUser}
        isAuth={data && data.currentUser ? token : null}
      />
    )
  );
}
