import { FetchUserCheckInHistoryUseCase } from '../fetch-user-check-ins-history'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeFetchUserCheckInHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const fetchUserCheckInHistoryUseCase = new FetchUserCheckInHistoryUseCase(
    checkInsRepository,
  )

  return fetchUserCheckInHistoryUseCase
}
