// server.ts
import { ApolloServer, gql } from 'apollo-server'
import Data from '../Models/Data'

const typeDefs = gql`
  type Data {
    field1: String
    field2: Int
    # define your fields
  }

  type Query {
    getData: [Data]
  }
`

const resolvers = {
  Query: {
    getData: async () => {
      return await Data.find()
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
