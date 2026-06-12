// app/utils/globalState.ts
let activeLanguageId = 'es';
const listeners = new Set<() => void>();

export const globalState = {
  getActiveLanguageId() {
    return activeLanguageId;
  },
  setActiveLanguageId(id: string) {
    activeLanguageId = id;
    listeners.forEach(listener => listener());
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }
};
