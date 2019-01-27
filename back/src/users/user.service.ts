import { Service } from 'typedi'
import { hash, genSalt } from 'bcryptjs'
import db from '../database/client'
import User from './user.type'
import UserInput from './user.input'

@Service()
export default class UserService {
  private _ = db.getCollection('users')

  find(id: number): User {
    return this._.findOne({ id })
  }
  findByEmail(email: string): User {
    return this._.findOne({ email })
  }
  async create(data: UserInput): Promise<User> {
    const body = {
      ...data,
      id: this._.count() + 1,
      password: await hash(data.password, await genSalt(10))
    }
    const { id } = this._.insert(body)
    return this.find(id)
  }
}
