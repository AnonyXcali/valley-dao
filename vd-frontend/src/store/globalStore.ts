import { create } from "zustand";

interface GlobalState {
  theme: string;
  setTheme: (theme: string) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));

export default useGlobalStore;