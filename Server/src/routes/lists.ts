import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'

export async function listsRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const lists = await knex('lists').select()

    return lists
  })

  app.get('/:id', async (reply) => {
    const getListParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getListParamsSchema.parse(reply.params)

    const list = await knex('lists')
      .where({
        id,
      })
      .first()

    return { list }
  })

  app.post('/', async (request, reply) => {
    const createListBodySchema = z.object({
      description: z.string(),
      category: z.string(),
    })

    const { description, category } = createListBodySchema.parse(request.body)

    await knex('lists').insert({
      id: randomUUID(),
      description,
      category,
      created_at: new Date().toISOString(),
      toggle: 'unchecked',
    })

    return reply.status(201).send()
  })

  app.patch('/:id/toggle', async (request, reply) => {
    const toggleListIten = z.object({
      id: z.string().uuid(),
    })

    const { id } = toggleListIten.parse(request.params)

    const searchItem = await knex('lists').where({ id }).select().first()

    if (searchItem?.toggle === 'checked') {
      await knex('lists').where({ id }).update({ toggle: 'unchecked' })
    } else {
      await knex('lists').where({ id }).update({ toggle: 'checked' })
    }

    return reply.status(201).send()
  })
}
