import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface List {
  id: string
  description: string
  category: string
  created_at: string
  toggle: string
}

interface CreateItemListInput {
  description: string
  category: string
}

interface ListContextType {
  lists: List[]
  fetchLists: () => Promise<void>
  createItemList: (data: CreateItemListInput) => Promise<void>
  toggleItem: (id: string) => Promise<void>
}

interface ListsProviderProps {
  children: ReactNode
}

export const ListsContext = createContext({} as ListContextType)

export function ListsProvider({ children }: ListsProviderProps) {
  const [lists, setLists] = useState<List[]>([])

  async function fetchLists() {
    const response = await api.get('/lists', {
      params: {
        _sort: 'created_at',
        _order: 'desc',
      },
    })

    setLists(response.data)
  }

  async function createItemList(data: CreateItemListInput) {
    const { description, category } = data

    const reply = await api.post('/lists', {
      description,
      category,
    })

    setLists((state) => [reply.data, ...state])
  }

  async function toggleItem(id: string) {
    await api.patch(`/lists/${id}/toggle`)

    fetchLists()
  }

  useEffect(() => {
    fetchLists()
  }, [])

  return (
    <ListsContext.Provider
      value={{ lists, fetchLists, createItemList, toggleItem }}
    >
      {children}
    </ListsContext.Provider>
  )
}
