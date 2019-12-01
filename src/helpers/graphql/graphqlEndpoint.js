import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

// const endpoint = 'https://api-global-ratings.herokuapp.com/graphql'

const cache = new InMemoryCache();
const httpLink = new HttpLink({
  //uri: endpoint
 uri: 'http://localhost:4000/graphql'
})

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : ""
      }
    }
  });
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
})

export default client; 