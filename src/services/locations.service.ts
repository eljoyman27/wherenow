import { Prisma } from '@prisma/client'
import { prisma } from '../prisma/client'

export const LocationsService = {
  create: async (data: Prisma.LocationCreateInput) => {
    return prisma.location.create({ data })
  },

  getAll: async () => {
    return prisma.location.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  }
}