import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { X } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { ListsContext } from '../../contexts/ListsContext'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newListFormSchema = z.object({
  description: z.string(),
  category: z.string(),
})

type NewListFormInputs = z.infer<typeof newListFormSchema>

export function NewListModal() {
  const { createItemList } = useContext(ListsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewListFormInputs>({
    resolver: zodResolver(newListFormSchema),
  })

  async function handleNewItemList(data: NewListFormInputs) {
    const { category, description } = data

    await createItemList({
      description,
      category,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo Item</Dialog.Title>
        <CloseButton>
          <X />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewItemList)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
