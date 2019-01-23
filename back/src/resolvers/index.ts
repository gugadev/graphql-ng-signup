import { queryResolvers, mutationReslvers } from './user'

export default {
  Query: {
    ...queryResolvers
  },
  Mutation: {
    ...mutationReslvers
  }
}
