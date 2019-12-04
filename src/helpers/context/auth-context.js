import React, { createContext } from "react";

export default createContext({
  token: null,
  username: null,
  urlImg: null,
  name: null,
  userId: null,
  posts: [],
  login: (token, username, name, userId, urlImg) => {},
  updateUser: () => {},
  logout: () => {}
});
