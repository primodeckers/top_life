const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const context = require('./config/context')
const resolvers = require('./resolvers')

require('dotenv').config();

const schemaPath = './schema/index.graphql'
const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers,
    context
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})