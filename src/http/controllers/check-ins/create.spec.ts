import request from 'supertest'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { app } from '@/app'
import { createAnAuthenticatedUser } from '@/utils/test/create-an-authenticated-user'
import { prisma } from '@/lib/prisma'

describe('Create Check-in (e2e)', () => {
  beforeAll(async () => {
    app.ready()
  })

  afterAll(async () => {
    app.close()
  })

  it('should be able to create a check-in', async () => {
    const { token } = await createAnAuthenticatedUser(app)

    const gym = await prisma.gym.create({
      data: {
        title: 'Smart Fit',
        description: 'A melhor acadamia',
        phone: '19 998541923',
        latitude: -22.3935713,
        longitude: -47.5836257,
      },
    })

    const response = await request(app.server)
      .post(`/gyms/${gym.id}/check-ins`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        latitude: -22.3935713,
        longitude: -47.5836257,
      })

    expect(response.statusCode).toEqual(201)
  })
})
