import { create } from 'zustand';

interface User {
  name: string;
  email: string;
  password: string;
}

interface UserStore {
  user: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    name: '',
    email: '',
    password: '',
  },
  setUser: (user) => set({ user }),
}));