import React from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { Container, Typography, Box, CssBaseline, AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// A simple custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A nice blue
    },
    secondary: {
      main: '#dc004e', // A contrasting pink/red
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applies baseline styling */}
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ marginRight: 1 }}>
            Simple Notes App sample (React, TS, MUI, Redux) for SoftPositive
          </Typography>

        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box sx={{ my: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            My Notes
          </Typography>
          <NoteForm />
          <NoteList />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
