import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms'

export function makeFetchNearbyGymUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const fetchNearbyGymUseCase = new FetchNearbyGymsUseCase(gymsRepository)

  return fetchNearbyGymUseCase
}
