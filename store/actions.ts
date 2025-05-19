import { UserApi } from '@/apis/userApi';
import { User, UpdateUserPayload } from '@/apis/user';

export const fetchUser = () => async (dispatch: any) => {
  dispatch({ type: 'FETCH_USER_REQUEST' });
  try {
    const user = await UserApi.fetchUser();
    dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    dispatch({ type: 'FETCH_USER_FAILURE', payload: errorMessage });
  }
};

export const updateUser = (payload: UpdateUserPayload) => async (dispatch: any) => {
  dispatch({ type: 'UPDATE_USER_REQUEST' });
  try {
    const user = await UserApi.updateUser(payload);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    dispatch({ type: 'UPDATE_USER_FAILURE', payload: errorMessage });
  }
}