import { ThemeProvider } from 'styled-components'
import { List } from './pages/List'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ListsProvider } from './contexts/ListsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ListsProvider>
        <List />
      </ListsProvider>
    </ThemeProvider>
  )
}
