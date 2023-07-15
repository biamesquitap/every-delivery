import { prisma } from '../lib/prisma'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function purchaseRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const getPurchaseQuerySchema = z.object({
        userId: z.string().uuid(),
      })
      const { userId } = getPurchaseQuerySchema.parse(request.query)

      const purchase = await prisma.purchase.findMany({
        where: {
          userId,
        },
      })

      return { purchase, total: purchase?.length || 0 }
    },
  )

  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const getPurchaseParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getPurchaseParamsSchema.parse(request.params)

      const purchase = await prisma.purchase.findUnique({
        where: {
          id,
        },
      })

      return { purchase }
    },
  )

  app.post('/', async (request, reply) => {
    const createProductBodySchema = z.object({
      totalAmount: z.number(),
      userId: z.string().uuid(),
      products: z.string().array(),
    })

    const { totalAmount, userId, products } = createProductBodySchema.parse(
      request.body,
    )

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      return reply.code(404).send({ error: 'User not found' })
    }

    const productList = await Promise.all(
      products.map(async (productId) => {
        const getProduct = await prisma.product.findUnique({
          where: {
            id: productId,
          },
        })

        return getProduct
      }),
    )

    await prisma.purchase.create({
      data: {
        totalAmount,
        userId,
        products: {
          connect: productList.map((product) => ({ id: product?.id })),
        },
      },
    })

    return reply.status(201).send()
  })
}
