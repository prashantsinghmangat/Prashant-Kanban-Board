import { create } from 'zustand';

interface AuthStore {
  user: string | null;
  login: (username: string, password: string) => boolean;
  signup: (username: string, password: string) => boolean;
  logout: () => void;
}

// Initialize demo account if it doesn't exist
const initializeDemoAccount = () => {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (!users.prashant) {
    users.prashant = 'prashant';
    localStorage.setItem('users', JSON.stringify(users));
  }
};

initializeDemoAccount();

export const useAuthStore = create<AuthStore>((set) => ({
  user: localStorage.getItem('currentUser'),

  login: (username: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username] === password) {
      localStorage.setItem('currentUser', username);
      set({ user: username });
      return true;
    }
    return false;
  },

  signup: (username: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username]) {
      return false;
    }
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', username);
    set({ user: username });
    return true;
  },

  logout: () => {
    localStorage.removeItem('currentUser');
    set({ user: null });
  },
}));