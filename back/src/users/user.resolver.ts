import {
  Resolver,
  Arg,
  Query,
  Mutation,
  Int
} from 'type-graphql'
import { Inject } from 'typedi'
import User from './user.type'
import UserInput from './user.input'
import UserService from './user.service'

@Resolver(of => User)
export default class UserResolver {
  @Inject()
  private userService: UserService

  @Query(returns => User, { nullable: true })
  user(@Arg('email') email: string) {
    return this.userService.findByEmail(email)
  }
  @Mutation(returns => User)
  createUser(@Arg('data') data: UserInput) {
    return this.userService.create(data)
  }
}
