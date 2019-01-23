import createServer from './server'

const run = async () => {
  try {
    const server = createServer()
    const { url } = await server.listen({ port: 3000 })
    console.log(`🚀  Server ready at ${url}`)
  } catch (e) {
    console.error('Something went wrong.', e)
  }
}

run()
