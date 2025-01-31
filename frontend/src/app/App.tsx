import { Navbar, SuperHeroForm, SuperHeroList } from '@components/index'
import useDarkModeStore from '@stores/useDarkModeStore'
import styled from 'styled-components'

const AppContainer = styled.div<{ $darkMode: boolean }>`
  background-color: ${({ $darkMode }) => ($darkMode ? 'var(--bg-dark)' : 'var(--bg-light)')};
  color: ${({ $darkMode }) => ($darkMode ? 'var(--text-light)' : 'var(--text-dark)')};
  min-height: 100vh;
`

function App() {
  const { darkMode } = useDarkModeStore()

  return (
    <AppContainer $darkMode={darkMode}>
      <Navbar />
      <SuperHeroForm />
      <SuperHeroList />
    </AppContainer>
  )
}

export default App
