import {
  InputType,
  Field
} from 'type-graphql'

@InputType()
export default class UserInput {
  @Field(type => String)
  email: string
  @Field(type => String)
  password: string
}
