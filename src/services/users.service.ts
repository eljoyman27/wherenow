import { prisma } from '../prisma/client'
import { hashPassword } from '../utils/auth'

export const UsersService = {
  create: async (data: { email: string; username: string;password: string }) => {
    const hashed = await hashPassword(data.password)
    return prisma.user.create({
      data: {
        email: data.email,
        username: data.username,
        passwordHash: hashed,
      },
    })
  },

  getAll: async () => {
    return prisma.user.findMany()
  },

  findByEmail: async (email: string) => {
    return prisma.user.findUnique({ where: { email } })
  }
}
