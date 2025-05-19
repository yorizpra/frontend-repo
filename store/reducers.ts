import { User } from '@/apis/user';

const initialState = {
  user: null as User | null,
  loading: false,
  error: null as string | null
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
    case 'UPDATE_USER_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_USER_SUCCESS':
    case 'UPDATE_USER_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'FETCH_USER_FAILURE':
    case 'UPDATE_USER_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};