import React, { createContext } from 'react';

export default createContext({
    token: null,
    username: null, 
    urlImg: null,
    name:null, 
    userId: null , 
    login: (token, username ,name, userId, urlImg) => { },
    logout: () => { }
}); 