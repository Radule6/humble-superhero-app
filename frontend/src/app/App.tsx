import { Navbar, SuperHeroForm, SuperHeroList } from '@components/index'
import useDarkModeStore from '@stores/useDarkModeStore'
import { AppContainer } from '@app/styles/AppStyles'

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
