// FormStyles.js
import { styled } from '@mui/material/styles';
import { Paper, Button } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const StyledFileInput = styled('div')(({ theme }) => ({
  width: '97%',
  margin: '10px 0',
}));

export const StyledButtonSubmit = styled(Button)(({ theme }) => ({
  marginBottom: 10,
}));
