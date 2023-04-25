import request from 'supertest'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { app } from '@/app'
import { createAnAuthenticatedUser } from '@/utils/test/create-an-authenticated-user'

describe('Search Gyms (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to search gyms by title', async () => {
    const { token } = await createAnAuthenticatedUser(app)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Smart Fit',
        description: 'A melhor acadamia',
        phone: '19 998541923',
        latitude: -22.3935713,
        longitude: -47.5836257,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Sky Fit',
        description: 'A segunda melhor acadamia',
        phone: '1999999999',
        latitude: -23.3935713,
        longitude: -43.5836257,
      })

    const response = await request(app.server)
      .get('/gyms/search')
      .query({
        q: 'Smart Fit',
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({ title: 'Smart Fit' }),
    ])
  })
})
