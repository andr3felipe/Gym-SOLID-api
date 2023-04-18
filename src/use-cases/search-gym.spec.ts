import { SearchGymUseCase } from './search-gym'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { Decimal } from '@prisma/client/runtime'
import { it, describe, beforeEach, expect } from 'vitest'

let gymRepository: InMemoryGymsRepository
let sut: SearchGymUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymRepository = new InMemoryGymsRepository()
    sut = new SearchGymUseCase(gymRepository)
  })

  it('Should be able to fetch for gyms', async () => {
    await gymRepository.create({
      title: 'Smart Fit',
      description: 'A melhor academia.',
      latitude: new Decimal(0),
      longitude: new Decimal(0),
    })

    await gymRepository.create({
      title: 'Outras academias',
      description: 'Primeira mensalidade grátis.',
      latitude: new Decimal(0),
      longitude: new Decimal(0),
    })

    const { gyms } = await sut.execute({
      query: 'Smart Fit',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Smart Fit' })])
  })

  it('Should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymRepository.create({
        title: `Smart Fit ${i}`,
        description: 'Primeira mensalidade grátis.',
        latitude: new Decimal(0),
        longitude: new Decimal(0),
      })
    }

    const { gyms } = await sut.execute({
      query: 'Smart Fit',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Smart Fit 21' }),
      expect.objectContaining({ title: 'Smart Fit 22' }),
    ])
  })
})
