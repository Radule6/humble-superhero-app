import useDarkModeStore from '@stores/useDarkModeStore';
import { NavbarContainer, Logo, ToggleButton } from '@components/Navbar/styles/NavbarStyles';


function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    toggleDarkMode();
  };

  return (
    <NavbarContainer $darkMode={darkMode}>
      <Logo>Humble Heroes</Logo>
      <ToggleButton 
        $darkMode={darkMode} 
        onClick={handleToggle}
        type="button"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </ToggleButton>
    </NavbarContainer>
  );
}

export default Navbar;