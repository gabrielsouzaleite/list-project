import { app } from './app'
import cors from '@fastify/cors'

app.register(cors)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
