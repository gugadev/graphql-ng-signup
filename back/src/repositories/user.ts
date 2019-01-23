import User from "src/models/user"
import db from '../database/client'

export interface IUserRepository {
  findByEmail(email: string): User
  create(user: User): User
}

export default class UserRepository implements IUserRepository {
  private datasource: Collection<User>
  
  constructor() {
    this.datasource = db.getCollection('users')
  }
  findByEmail(email: string): User {
    return this.datasource.findOne({ email })
  }
  create(user: User): User {
    this.datasource.insert(user)
    return user
  }
}
