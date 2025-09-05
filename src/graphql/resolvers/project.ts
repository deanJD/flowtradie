import { Context } from './types'

export const projectResolvers = {
  Query: {
    projects: async (_parent: unknown, _args: unknown, context: Context) => {
      return context.prisma.project.findMany({
        include: { trades: true, tasks: true },
      })
    },
  },
}