import { Prisma, Gym } from '@prisma/client'

export interface GymsRepository {
  findById(id: string): Promise<Gym | null>
  findByLocation(
    latitude: number,
    longitude: number,
  ): Promise<Gym[] | Gym | null>
  searchMany(query: string, page: number): Promise<Gym[]>
  create(data: Prisma.GymCreateInput): Promise<Gym>
}
