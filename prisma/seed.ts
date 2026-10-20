import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding WhereNow database...')

  const passwordHash = await bcrypt.hash('123456', 10)

  // --------------------------------------------------
  // USERS
  // --------------------------------------------------

  const user1 = await prisma.user.create({
    data: {
      email: 'reinaldo@example.com',
      username: 'reinaldo',
      passwordHash,
      firstName: 'Reinaldo',
      lastName: 'Burgos',
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'friend@example.com',
      username: 'johnfriend',
      passwordHash,
      firstName: 'John',
      lastName: 'Friend',
    },
  })

  // --------------------------------------------------
  // LOCATIONS
  // --------------------------------------------------

  await prisma.location.create({
    data: {
      name: 'Disney Springs',
      description: 'Shopping and dining',
      latitude: 28.370,
      longitude: -81.516,
    },
  })

  await prisma.location.create({
    data: {
      name: 'Universal CityWalk',
      description: 'Entertainment district',
      latitude: 28.474,
      longitude: -81.466,
    },
  })

  // --------------------------------------------------
  // EVENTS
  // --------------------------------------------------

  await prisma.event.create({
    data: {
      title: 'Wine Night',
      description: 'Evening social event',
      latitude: 28.370,
      longitude: -81.516,
      startDate: new Date(),
      creatorId: user1.id,
    },
  })

  await prisma.event.create({
    data: {
      title: 'Meetup Developers',
      description: 'Developer meetup',
      latitude: 28.474,
      longitude: -81.466,
      startDate: new Date(),
      creatorId: user2.id,
    },
  })

  // --------------------------------------------------
  // FRIENDSHIP
  // --------------------------------------------------

  await prisma.friendship.create({
    data: {
      requesterId: user1.id,
      receiverId: user2.id,
      status: 'ACCEPTED',
    },
  })

  console.log('🌱 Seed completed successfully!')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })