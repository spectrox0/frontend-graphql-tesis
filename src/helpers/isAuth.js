import React, { useState, useEffect } from "react";
import { CURRENT_USER } from "./graphql/querys/querys";
import { useQuery } from "@apollo/react-hooks";
import AuthContext from "./context/auth-context";
import Routes from "./routes/Routes";

export default function IsAuth() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [urlImg, setUrlImg] = useState(null);
  const [posts, setPosts] = useState([]);
  const { data, loading, error, refetch } = useQuery(CURRENT_USER);

  const login = async token => {
    localStorage.setItem("token", token);
    setToken(token);
    refetch();
  };

  const updateUser = () => {
    refetch();
  };
  const logout = () => {
    setToken(null);
    setUsername(null);
    setName(null);
    setUserId(null);
    setUrlImg(null);
    setPosts([]);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (data && data.currentUser && !loading) {
      const response = localStorage.getItem("token");
      setUsername(data.currentUser.username);
      setName(data.currentUser.name);
      setUserId(data.currentUser._id);
      setUrlImg(data.currentUser.urlImg);
      setPosts(data.currentUser.posts);
      setToken(response);
    } else if (error && localStorage.getItem("token")) {
      logout();
      return;
    }
  }, [token, loading, error, data]);

  return (
    <AuthContext.Provider
      value={{
        token: token,
        urlImg: urlImg,
        username: username,
        login: login,
        name: name,
        userId: userId,
        logout: logout,
        posts: posts,
        updateUser: updateUser
      }}
    >
      {!loading && <Routes isAuth={data ? token : null} />}
    </AuthContext.Provider>
  );
}
