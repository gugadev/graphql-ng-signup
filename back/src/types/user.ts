import { gql } from "apollo-server"

export default gql`
  type User {
    fullname: String
    email: String
    password: String
    photo: String
  }
`
