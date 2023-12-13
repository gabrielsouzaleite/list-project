import { NewListModal } from '../NewListModal'
import { HeaderContainer, NewListItemButton } from './styels'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <HeaderContainer>
      <h1>Lista</h1>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewListItemButton>Cadastrar</NewListItemButton>
        </Dialog.Trigger>

        <NewListModal />
      </Dialog.Root>
    </HeaderContainer>
  )
}
