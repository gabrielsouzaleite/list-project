// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    lists: {
      id: string
      description: string
      category: string
      created_at: string
      toggle: string
    }
  }
}
