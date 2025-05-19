import { User, UpdateUserPayload } from './user';
import { auth } from '@/lib/firebase';

const API_BASE_URL = 'http://localhost:3000/api';

export const UserApi = {
  fetchUser: async (): Promise<User> => {
    const token = await auth.currentUser?.getIdToken();
    const response = await fetch(`${API_BASE_URL}/fetch-user-data`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.json();
  },

  updateUser: async (payload: UpdateUserPayload): Promise<User> => {
    const token = await auth.currentUser?.getIdToken();
    const response = await fetch(`${API_BASE_URL}/update-user-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });
    return response.json();
  }
};