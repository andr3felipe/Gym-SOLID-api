import { makeCreateGymUseCase } from '@/use-cases/factories/make-create-gym-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function gym(request: FastifyRequest, reply: FastifyReply) {
  const gymBodySchema = z.object({
    title: z.string().min(3).max(15),
    description: z.string().min(3).max(50),
    phone: z.string(),
    latitude: z.number(),
    longitude: z.number(),
  })

  const { title, description, phone, latitude, longitude } =
    gymBodySchema.parse(request.body)

  try {
    const createGymUseCase = makeCreateGymUseCase()

    await createGymUseCase.execute({
      title,
      description,
      phone,
      latitude,
      longitude,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
