import { Prisma, Gym } from '@prisma/client'
import dayjs from 'dayjs'
import { GymsRepository } from '../gyms-repository'
import { prisma } from '@/lib/prisma'

export class PrismaCreateGymRepository implements GymsRepository {
  async findById(id: string): Promise<Gym | null> {
    const gym = await prisma.gym.findUnique({
      where: {
        id,
      },
    })

    if (!gym) {
      return null
    }

    return gym
  }

  async findByLocation(latitude: number, longitude: number) {
    const gym = await prisma.gym.findMany({
      where: {
        latitude,
        longitude,
      },
    })

    if (!gym || gym[0] === undefined) {
      return null
    }

    return gym
  }

  async findByUserIdOnDate(userId: string, date: Date) {
    const startOfTheDay = dayjs(date).startOf('date')
    const endOfTheDay = dayjs(date).endOf('date')

    const getCheckInsData = await prisma.checkIn.findMany({
      where: {
        user_id: userId,
      },
    })

    const checkInOnSameDate = getCheckInsData.find((checkIn) => {
      const checkInDate = dayjs(checkIn.created_at)
      const isOnSameDate =
        checkInDate.isAfter(startOfTheDay) && checkInDate.isBefore(endOfTheDay)

      return checkIn.user_id === userId && isOnSameDate
    })

    if (!checkInOnSameDate) {
      return null
    }

    return checkInOnSameDate
  }

  async create(data: Prisma.GymCreateInput): Promise<Gym> {
    const gym = await prisma.gym.create({
      data: {
        title: data.title,
        description: data.description,
        phone: data.phone ?? null,
        latitude: data.latitude,
        longitude: data.longitude,
      },
    })

    return gym
  }
}
