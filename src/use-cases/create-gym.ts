import { Gym } from '@prisma/client'
import { GymsRepository } from '@/repositories/gyms-repository'
import { GymAlreadyExistsError } from './errors/gym-already.exists'

interface CreateGymUseCaseRequest {
  title: string
  description: string
  phone: string | null
  latitude: number
  longitude: number
}

interface CreateGymUseCaseResponse {
  gym: Gym
}

export class CreateGymUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private gymRepository: GymsRepository) {}

  async execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  }: CreateGymUseCaseRequest): Promise<CreateGymUseCaseResponse> {
    const gymAlreadyExists = await this.gymRepository.findByLocation(
      latitude,
      longitude,
    )

    if (gymAlreadyExists) {
      throw new GymAlreadyExistsError()
    }

    const gym = await this.gymRepository.create({
      title,
      description,
      phone,
      latitude,
      longitude,
    })

    return {
      gym,
    }
  }
}
