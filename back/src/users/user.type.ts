import {
  ObjectType,
  Field,
  Int
} from 'type-graphql'

@ObjectType()
export default class User {
  @Field(type => Int, { nullable: true })
  id?: number
  @Field()
  email: string
  @Field()
  password: string
}
