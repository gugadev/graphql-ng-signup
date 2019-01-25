import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import formatError from '../errors/argument.format'
import UserResolver from '../users/user.resolver'

export default async () => {
  const schema = await buildSchema({
    resolvers: [
      UserResolver
    ]
  })
  return new ApolloServer({
    schema,
    formatError,
    tracing: true
  })
}
