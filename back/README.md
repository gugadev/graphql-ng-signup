<p align="center">
  <h1>Backend</h1>
</p>

## Stack

Our stack is quite simple:

- [type-graphql](https://github.com/19majkel94/type-graphql): to map our types and resolvers using classes and decorators.
- [typedi](https://github.com/typestack/typedi): to use a dependency injection container.
- [apollo-server](https://github.com/apollographql/apollo-server): to build our graphql server.
- [lokijs](https://github.com/techfort/LokiJS): to store data in a memory database.
- [pino](https://github.com/pinojs/pino): to logging.

## Scripts

There are a bunch of scripts for you. The most importants are:

- `start:dev`: to run the app using nodemon.
- `start:build`: to transpile the application to ES6
- `start:prod`: to run the application using node instead ts-node.
