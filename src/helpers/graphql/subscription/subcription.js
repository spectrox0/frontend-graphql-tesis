import gql from "graphql-tag";
export const MESSAGE_ADDED_SUBSCRIPTION = gql`
  subscription messageAdded($postId: String!) {
    messageAdded(postId: $postId) {
      _id
      content
      date
      user {
        _id
        username
        name
        urlImg
      }
    }
  }
`;
