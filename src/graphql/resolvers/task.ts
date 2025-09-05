import { Context } from './types'

export const taskResolvers = {
  Query: {
    tasks: (_parent: unknown, _args: unknown, context: Context) => {
      return context.prisma.task.findMany({
        include: { project: true, trade: true }
      })
    }
  }
}