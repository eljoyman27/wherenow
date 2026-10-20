import { prisma } from '../prisma/client'

export const EventsService = {
  create: async (data: any) => {
    return prisma.event.create({ data })
  },

  getAll: async () => {
    return prisma.event.findMany()
  }
}
