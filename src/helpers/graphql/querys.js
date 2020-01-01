import gql from "graphql-tag";
export const CURRENT_USER = gql`
  {
    currentUser {
      _id
      email
      name
      username
      urlImg
    }
  }
`;

export const QUERY_CATEGORY = gql`
  {
    __type(name: "Category") {
      enumValues {
        name
        description
      }
    }
  }
`;

export const QUERY_POST_BY_CREATOR = gql`
  query postsByCreator($userId: String!) {
    postsByCreator(userId: $userId) {
      _id
      title
      date
      urlImg
      creator {
        _id
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($_id: String!) {
    post(_id: $_id) {
      title
      urlImg
      messages {
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
  }
`;

export const QUERY_SEARCH_POST = gql`
  query searchPost(
    $first: Int!
    $after: Int!
    $categories: [Category!]!
    $word: String!
  ) {
    searchPost(
      first: $first
      after: $after
      categories: $categories
      word: $word
    ) {
      _id
      title
      date
      urlImg
      creator {
        _id
      }
    }
  }
`;

export const QUERY_MESSAGES = gql`
  query messages($postId: String!, $first: Int!, $after: String) {
    messages(postId: $postId, first: $first, after: $after) {
      hasNextPage
      messages {
        _id
        content
        date
        user {
          _id
          username
          urlImg
        }
      }
    }
  }
`;

export const QUERY_NOTIFICATIONS = gql`
  query notifications($userId: String!) {
    notifications(userId: $userId) {
      _id

      message {
        content
        date

        user {
          username
          urlImg
        }
      }
      post {
        _id
        title
        urlImg
        creator {
          _id
        }
      }
    }
  }
`;
