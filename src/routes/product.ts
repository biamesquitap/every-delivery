import { prisma } from '../lib/prisma'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function productsRoutes(app: FastifyInstance) {
  app.get(
    '/',

    async () => {
      const products = await prisma.product.findMany()
      return { products, total: products?.length || 0 }
    },
  )

  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const getProductParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getProductParamsSchema.parse(request.params)

      const product = await prisma.product.findUnique({
        where: {
          id,
        },
      })

      return { product }
    },
  )

  app.post('/', async (request, reply) => {
    const createProductBodySchema = z.object({
      name: z.string(),
      description: z.string().optional(),
      price: z.number(),
      type: z.enum(['eletronicos', 'comidas', 'livros', 'vestuario']),
    })

    const { name, description, price, type } = createProductBodySchema.parse(
      request.body,
    )

    await prisma.product.create({
      data: {
        name,
        description,
        price,
        type,
      },
    })

    return reply.status(201).send()
  })

  app.delete(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const productParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = productParamsSchema.parse(request.params)

      try {
        await prisma.product.delete({
          where: {
            id,
          },
        })

        reply.send({ message: 'Product deleted successfully' })
      } catch (error) {
        reply.code(500).send({ error: 'Internal server error' })
      }
    },
  )
}
