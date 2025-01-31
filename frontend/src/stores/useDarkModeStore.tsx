import { create } from 'zustand';

interface DarkModeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

//Dark mode store to toggle between light and dark mode
const useDarkModeStore = create<DarkModeStore>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useDarkModeStore;
