import { Button, CircularProgress } from '@mui/material';
import { useAppDispatch } from '@/store';
import { updateUser } from '@/store/actions';
import { useSelector } from 'react-redux';

import type { UpdateUserPayload } from '@/apis/user'; // Adjust the import path as needed

export const UpdateButton = ({ payload }: { payload: UpdateUserPayload }) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector((state: any) => state.user?.isUpdating); // Adjust selector as needed

  const handleUpdate = () => {
    dispatch(updateUser(payload));
  };

  return (
    <Button 
      variant="contained" 
      onClick={handleUpdate}
      startIcon={isLoading && <CircularProgress size={20} />}
      disabled={isLoading}
    >
      Update User
    </Button>
  );
};