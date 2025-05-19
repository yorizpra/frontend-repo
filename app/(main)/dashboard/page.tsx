'use client';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchUser } from '@/store/actions';
import { UpdateButton } from '@/components/UpdateButton';
import { Box, Typography, TextField } from '@mui/material';

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  interface User {
    name: string;
    email: string;
    // Add other user fields if needed
  }

  interface UserState {
    user: User | null;
    loading: boolean;
    error: string | null;
  }

  const { user, loading, error }: UserState = useAppSelector((state: { user: UserState }) => state.user);
  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Box p={4}>
      <Typography variant="h4">User Dashboard</Typography>
      
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      
      {user && (
        <Box mt={2}>
          <Typography>Name: {user.name}</Typography>
          <Typography>Email: {user.email}</Typography>
          
          <TextField
            label="New Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mt: 2 }}
          />
          
          <UpdateButton payload={{ name }} />
        </Box>
      )}
    </Box>
  );
}