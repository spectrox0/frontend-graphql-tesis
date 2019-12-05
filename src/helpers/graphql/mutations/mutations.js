import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation createUser($userInput: UserInput!) {
    createUser(userInput: $userInput) {
      _id
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userInput: UpdateUserInput!) {
    updateUser(userInput: $userInput) {
      _id
      name
      username
      urlImg
    }
  }
`;
export const CREATE_POST = gql`
  mutation createPost($postInput: PostInput!) {
    createPost(postInput: $postInput) {
      title
      creator {
        _id
      }
      _id
      urlImg
    }
  }
`;
