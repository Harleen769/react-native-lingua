import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LanguageState {
  activeLanguageId: string | null;
  setActiveLanguageId: (id: string) => void;
  clearLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      activeLanguageId: null,
      setActiveLanguageId: (id) => set({ activeLanguageId: id }),
      clearLanguage: () => set({ activeLanguageId: null }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
