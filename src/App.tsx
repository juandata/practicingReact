import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'; // Import Button
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'; // Example Icon

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* MUI Button Example */}
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Hello MUI
        </Button>
        {/* MUI Icon Example */}
        <Button
          variant="outlined"
          startIcon={<AccessAlarmIcon />}
          sx={{ mt: 2 }}
        >
          Alarm
        </Button>
      </header>
    </div>
  );
}

export default App;
