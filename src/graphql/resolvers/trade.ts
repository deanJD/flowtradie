import { Context } from './types'

export const tradeResolvers = {
  Query: {
    trades: (_parent: unknown, _args: unknown, context: Context) => {
      return context.prisma.trade.findMany({
        include: { project: true, tasks: true }
      })
    }
  }
}