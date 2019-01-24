import 'reflect-metadata'
import { Container } from 'typedi'
import { useContainer } from 'type-graphql'
import createServer from './server'
import log from './logger'

const run = async () => {
  useContainer(Container)
  try {
    const server = await createServer()
    const { url } = await server.listen({ port: 3000 })
    log.info(`🚀  Server ready at ${url}`)
  } catch (e) {
    log.error(e)
  }
}

run()
