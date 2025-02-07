// src/components/SearchInput.tsx
import { TextField } from '@mui/material';

export const SearchInput = () => {
  return (
    <TextField
      fullWidth
      label="Search Jobs"
      variant="outlined"
      sx={{ mb: 3 }}
    />
  );
};