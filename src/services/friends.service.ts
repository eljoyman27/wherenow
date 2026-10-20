import { prisma } from '../prisma/client'

export const FriendsService = {
  add: async (data: { userId: string; friendId: string }) => {
    return prisma.friendship.create({
      data: {
        requesterId: data.userId,
        receiverId: data.friendId,
      },
    })
  },

  get: async (userId: string) => {
    return prisma.friendship.findMany({
      where: {
        OR: [
          { requesterId: userId },
          { receiverId: userId },
        ],
      },
      include: {
        requester: true,
        receiver: true,
      },
    })
  },
}