import { IsEmail } from 'class-validator'
import {
  InputType,
  Field
} from 'type-graphql'

@InputType()
export default class UserInput {
  @Field(type => String)
  @IsEmail()
  email: string
  @Field(type => String)
  password: string
}
