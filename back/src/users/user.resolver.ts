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

  @Query(returns => User)
  user(@Arg('id', type => Int) id: number) {
    return this.userService.find(id)
  }
  @Mutation(returns => User)
  createUser(@Arg('userData') data: UserInput) {
    return this.userService.create(data)
  }
}
