
import gql from 'graphql-tag' ; 
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
`