import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './helpers/routes/Routes.js';
import IsAuth from './helpers/isAuth'
import { ApolloProvider } from '@apollo/react-hooks'; 
import client from './helpers/graphql/graphqlEndpoint';

 export default function App() {
  return (
    <BrowserRouter> 
        <ApolloProvider client ={client}> 
        <IsAuth/>
        </ApolloProvider>
    
    </BrowserRouter>
  );
}

