import { projectResolvers } from './project'
import { tradeResolvers } from './trade'
import { taskResolvers } from './task'

export const resolvers = {
  Query: {
    ...projectResolvers.Query,
    ...tradeResolvers.Query,
    ...taskResolvers.Query
  }
}