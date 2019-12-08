import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const endpoint = "https://api-graphql-tesis.herokuapp.com/graphql";
const endpointWs = "wss://api-graphql-tesis.herokuapp.com/graphql";
const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: endpoint
});

const wsLink = new WebSocketLink({
  uri: endpointWs,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem("token")
    }
  }
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link,
  wsLink,
  cache
});

export default client;
