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
    __type(name: "category") {
      enumValues {
        name
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
        content
        date
        user {
          username
          name
          urlImg
        }
      }
    }
  }
`;
