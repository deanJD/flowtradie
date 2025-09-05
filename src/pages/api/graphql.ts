import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from '../../graphql/schema'
import { resolvers } from '../../graphql/resolvers'
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ prisma })
})

let handler: ReturnType<ApolloServer['createHandler']> | null = null

export const config = {
  api: { bodyParser: false }
}

export default async function graphqlHandler(req: NextApiRequest, res: NextApiResponse) {
  if (!handler) {
    await server.start()
    handler = server.createHandler({ path: '/api/graphql' })
  }
  return handler(req, res)
}




