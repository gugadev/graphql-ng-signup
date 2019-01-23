import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import typeDefs from '../types'
import resolvers from '../resolvers'

export default (): ApolloServer => {
  const schema = makeExecutableSchema({ typeDefs, resolvers })
  return new ApolloServer({ schema })
}
