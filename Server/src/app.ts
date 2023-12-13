import fastify from 'fastify'
import { listsRoutes } from './routes/lists'

export const app = fastify()

app.register(listsRoutes, {
  prefix: 'lists',
})
