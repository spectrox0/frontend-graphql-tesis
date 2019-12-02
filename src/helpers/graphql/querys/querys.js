
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

export const QUERY_CATEGORY = gql`
 {
  __type(name:"category") {
    enumValues{
      name
      
    }
  }
}
`