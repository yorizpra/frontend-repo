import { createTheme } from '@mui/material/styles';
import { palette } from '../theme/palette';
import { typography } from '../theme/typography';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
  },
});