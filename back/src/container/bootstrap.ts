import { Container } from 'typedi'
import { useContainer } from 'type-graphql'

/**
 * Enables Dependency Injection
 * between TypeGraphQL and TypeDI
 */
export default () => {
  useContainer(Container)
}
