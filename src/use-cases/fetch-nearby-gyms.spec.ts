import { describe, it, expect, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearb Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('Should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: '',
      latitude: -22.3902878,
      longitude: -47.5857009,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: '',
      latitude: -22.4797368,
      longitude: -47.5791795,
    })

    const { gyms } = await sut.execute({
      userLatitude: -22.3837188,
      userLongitude: -47.5556503,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: `Near Gym` })])
  })
})
