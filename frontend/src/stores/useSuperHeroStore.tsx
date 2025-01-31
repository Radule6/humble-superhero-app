import { create } from 'zustand';
import axios from 'axios';

// Superhero Interface
interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humilityScore: number;
}

// Store Interface
interface SuperheroStore {
  superheroes: Superhero[];
  isLoading: boolean;
  error: string | null;
  fetchSuperheroes: () => Promise<void>;
  createSuperhero: (superhero: Omit<Superhero, 'id'>) => Promise<void>;
}

const useSuperHeroStore = create<SuperheroStore>((set) => ({
  superheroes: [],
  isLoading: false,
  error: null,

  fetchSuperheroes: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<Superhero[]>(
        `${import.meta.env.VITE_API_URL}superheroes`
      );
      set({ superheroes: response.data });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch superheroes' });
    } finally {
      set({ isLoading: false });
    }
  },

  createSuperhero: async (superhero) => {
    set({ isLoading: true, error: null });
    try {
      await axios.post<Superhero>(
        `${import.meta.env.VITE_API_URL}superheroes`,
        superhero
      );
      const response = await axios.get<Superhero[]>(
        `${import.meta.env.VITE_API_URL}superheroes`
      );
      set({ superheroes: response.data });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to create superhero' });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useSuperHeroStore;
