import gql from "graphql-tag";
export const CURRENT_USER = gql`
  {
    currentUser {
      _id
      email
      name
      username
      urlImg
      posts {
        _id
        title
        date
        urlImg
      }
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
    }
  }
`;

export const QUERY_MESSAGES = gql`
  query messages($postId: String!, $first: Int!, $after: String) {
    messages(postId: $postId, first: $first, after: $after) {
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
