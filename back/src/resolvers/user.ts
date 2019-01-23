import UserRepository from '../repositories/user'
import User from 'src/models/user'

const db = new UserRepository()

export const queryResolvers = {
  checkForExists(_, { email }: { email: string }): boolean {
    const found: User = db.findByEmail(email)
    return found !== null
  }
}

export const mutationReslvers = {
  createAccount(_, user: User): User {
    const newAcc = db.create(user)
    return newAcc
  }
}
