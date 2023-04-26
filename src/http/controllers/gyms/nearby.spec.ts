import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { app } from '@/app'
import request from 'supertest'
import { createAnAuthenticatedUser } from '@/utils/test/create-an-authenticated-user'

describe('Nearby Gyms', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to fetch nearby gyms', async () => {
    const { token } = await createAnAuthenticatedUser(app, true)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Near Gym',
        phone: '19 920000131',
        description: 'Near Gym',
        latitude: -22.3902878,
        longitude: -47.5857009,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Far Gym',
        phone: '19 981114474',
        description: 'Far Gym',
        latitude: -22.4797368,
        longitude: -47.5791795,
      })

    const response = await request(app.server)
      .get('/gyms/nearby')
      .query({
        latitude: -22.3837188,
        longitude: -47.5556503,
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({ title: 'Near Gym' }),
    ])
  })
})
