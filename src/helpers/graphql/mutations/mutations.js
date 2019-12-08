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
  mutation createPost($postInput: PostInput!, $contentMessage: String!) {
    createPost(postInput: $postInput, contentMessage: $contentMessage) {
      title
      creator {
        _id
      }
      _id
      urlImg
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation createMessage($messageInput: MessageInput!) {
    createMessage(messageInput: $messageInput) {
      _id
      content
      user {
        _id
        urlImg
        username
      }
      date
      post {
        _id
      }
    }
  }
`;
