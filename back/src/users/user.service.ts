import { Service } from 'typedi'
import db from '../database/client'
import User from './user.type'
import UserInput from './user.input'

@Service()
export default class UserService {
  private _ = db.getCollection('users')

  find(id: number): User {
    return this._.findOne({ id })
  }
  create(data: UserInput): User {
    const { id } = this._.insert(data)
    return this.find(id)
  }
}
