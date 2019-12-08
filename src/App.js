import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./helpers/routes/Routes.js";
import IsAuth from "./helpers/isAuth";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./helpers/graphql/graphqlEndpoint";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

export default function App() {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE
  };
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AlertProvider template={AlertTemplate} {...options}>
          <IsAuth />
        </AlertProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}
