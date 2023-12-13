import { useContext, useEffect } from 'react'
import { Header } from '../../components/Header'
import {
  ListCheckbox,
  ListCheckboxCheck,
  ListCheckboxItem,
  ListContainer,
  ListLine,
  ListTable,
} from './styles'
import { ListsContext } from '../../contexts/ListsContext'
import { Check } from '@phosphor-icons/react'

export function List() {
  const { lists, toggleItem, fetchLists } = useContext(ListsContext)

  function handleToggleItem(idItem: string) {
    toggleItem(idItem)
  }

  useEffect(() => {
    fetchLists()
  }, [fetchLists])

  return (
    <ListContainer>
      <Header />
      <ListContainer>
        <ListTable>
          <tbody>
            {lists.map((list) => {
              if (list.toggle === 'checked') {
                return (
                  <ListLine variant={list.toggle} key={list.id}>
                    <td>
                      <ListCheckbox
                        checked
                        onCheckedChange={() => handleToggleItem(list.id)}
                      >
                        <ListCheckboxItem>
                          <ListCheckboxCheck>
                            <Check size={10} />
                          </ListCheckboxCheck>
                        </ListCheckboxItem>
                      </ListCheckbox>
                    </td>
                    <td width="50%">{list.description}</td>
                    <td>{list.category}</td>
                  </ListLine>
                )
              } else {
                return (
                  <ListLine variant={list.toggle} key={list.id}>
                    <td>
                      <ListCheckbox
                        onCheckedChange={() => handleToggleItem(list.id)}
                      >
                        <ListCheckboxItem>
                          <ListCheckboxCheck>
                            <Check size={10} />
                          </ListCheckboxCheck>
                        </ListCheckboxItem>
                      </ListCheckbox>
                    </td>
                    <td width="50%">{list.description}</td>
                    <td>{list.category}</td>
                  </ListLine>
                )
              }
            })}
          </tbody>
        </ListTable>
      </ListContainer>
    </ListContainer>
  )
}
