import { Service } from 'typedi'
import User from './user.type'
import UserInput from './user.input'

@Service()
export default class UserService {
  find(id: number): User {
    return null
  }
  create(data: UserInput): User {
    return null
  }
}
