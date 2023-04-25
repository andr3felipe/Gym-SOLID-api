import request from 'supertest'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { app } from '@/app'
import { createAnAuthenticatedUser } from '@/utils/test/create-an-authenticated-user'

describe('Create Gym (e2e)', () => {
  beforeAll(async () => {
    app.ready()
  })

  afterAll(async () => {
    app.close()
  })

  it('should be able to create a gym', async () => {
    const { token } = await createAnAuthenticatedUser(app)

    const response = await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Smart Fit',
        description: 'A melhor acadamia',
        phone: '19 998541923',
        latitude: -22.3935713,
        longitude: -47.5836257,
      })

    expect(response.statusCode).toEqual(201)
  })
})
