import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('Should be able to create a gym', async () => {
    const { gym } = await sut.execute({
      title: 'Smart Fit',
      description: 'A melhor academia',
      phone: '(19) 99854-1923',
      latitude: -22.393631,
      longitude: -47.5850395,
    })

    expect(gym.id).toEqual(expect.any(String))
  })

  it('Should not be able to create a gym in the same location', async () => {
    await sut.execute({
      title: 'Smart Fit',
      description: 'A melhor academia',
      phone: '(19) 99854-1923',
      latitude: -22.393631,
      longitude: -47.5850395,
    })

    await expect(() =>
      sut.execute({
        title: 'Smart Fit',
        description: 'A melhor academia',
        phone: '(19) 99854-1923',
        latitude: -22.393631,
        longitude: -47.5850395,
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
