import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface PhotoState {
  photoUri: string | null;
  setPhoto: (uri: string | null) => void;
}

export const usePhotoStore = create<PhotoState>()(
  persist(
    (set) => ({
      photoUri: null,
      setPhoto: (uri) => set({ photoUri: uri }),
    }),
    {
      name: "photo-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);