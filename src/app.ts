import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { usersRoutes } from './routes/users'
import { productsRoutes } from './routes/product'
import { purchaseRoutes } from './routes/purchase'

export const app = fastify()

app.register(cookie)

app.register(usersRoutes, {
  prefix: 'users',
})

app.register(productsRoutes, {
  prefix: 'products',
})

app.register(purchaseRoutes, {
  prefix: 'purchase',
})
