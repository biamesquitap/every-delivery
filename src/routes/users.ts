import { prisma } from '../lib/prisma'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'
import { randomUUID } from 'crypto'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { hash, compare } from 'bcryptjs'

export async function usersRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const { sessionId } = request.cookies

      const users = await prisma.user.findMany({
        where: {
          session_id: sessionId,
        },
      })

      return users
    },
  )

  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const getUserParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getUserParamsSchema.parse(request.params)

      const { sessionId } = request.cookies

      const user = await prisma.user.findUnique({
        where: {
          id,
          session_id: sessionId,
        },
      })

      return { user }
    },
  )

  app.post('/', async (request, reply) => {
    const createUserBodySchema = z.object({
      name: z.string(),
      email: z.string().email({ message: 'Digite um email válido!' }),
      password: z.string().min(6).max(32),
    })

    const { name, email, password } = createUserBodySchema.parse(request.body)

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      })
    }

    const password_hash = await hash(password, 6)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
        session_id: sessionId,
      },
    })

    return reply.status(201).send({ user })
  })

  app.delete(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const getUserParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getUserParamsSchema.parse(request.params)
      const { sessionId } = request.cookies

      try {
        const user = await prisma.user.findUnique({
          where: {
            id,
            session_id: sessionId,
          },
        })

        if (!user) {
          reply.code(404).send({ error: 'User not found' })
          return
        }

        await prisma.user.delete({
          where: {
            id,
          },
        })

        reply.send({ message: 'User deleted successfully' })
      } catch (error) {
        reply.code(500).send({ error: 'Internal server error' })
      }
    },
  )

  app.put('/login', async (request, reply) => {
    const createUserBodySchema = z.object({
      email: z.string().email({ message: 'Digite um email válido!' }),
      password: z.string().min(6).max(32),
    })

    const { email, password } = createUserBodySchema.parse(request.body)

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      })
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      reply.code(404).send({ error: 'Invalid credentials' })
      return
    }

    const doesPasswordMatches = await compare(password, user.password_hash)

    if (!doesPasswordMatches) {
      reply.code(404).send({ error: 'Invalid credentials' })
      return
    }

    try {
      const userUpdated = await prisma.user.update({
        where: {
          email,
        },
        data: {
          updated_at: new Date(),
          session_id: sessionId,
        },
      })
      return reply.status(201).send({ userUpdated })
    } catch (error) {
      return reply.code(404).send({ error: 'User not found' })
    }
  })
}
