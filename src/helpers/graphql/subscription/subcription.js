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

export const NOTIFICATION_ADDED_SUSCRIPTION = gql`
  subscription notificationAdded($userId: String!) {
    notificationAdded(userId: $userId) {
      _id

      message {
        content
        date

        user {
          username
          urlImg
        }
      }
    }
  }
`;
