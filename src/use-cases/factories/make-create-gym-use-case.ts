import { PrismaCreateGymRepository } from '@/repositories/prisma/prisma-create-gym-repository'
import { CreateGymUseCase } from '../create-gym'

export function makeCreateGymUseCase() {
  const gymRepository = new PrismaCreateGymRepository()
  const createGymUseCase = new CreateGymUseCase(gymRepository)

  return createGymUseCase
}
