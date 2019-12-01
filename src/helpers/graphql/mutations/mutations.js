import gql from 'graphql-tag' ; 

export const CREATE_USER = gql`
mutation 
createUser($userInput: UserInput) {
  createUser(userInput: $userInput) {
    _id
  }

}
` 

export const LOGIN = gql` 
mutation login($username: String!, $password:String!) {
  login(username: $username , password: $password) {
      token
      userId
      name
      username
      urlImg
  }
}
`