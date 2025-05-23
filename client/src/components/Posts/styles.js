import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  spacing: 3,
}));