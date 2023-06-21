import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import './initialSetup.css';

function InitialSetup({ handleStartGame }) {
  const [playerName, setPlayerName] = useState('');
  const [playerName2, setPlayerName2] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [finalValue2, setFinalValue2] = useState('');

  const handleInputChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setPlayerName2(event.target.value);
  };

  const handleSave = () => {
    setFinalValue(playerName);
  };

  const handleSave2 = () => {
    setFinalValue2(playerName2);
  };

  useEffect(() => {
    if (finalValue && finalValue2) {
      handleStartGame();
    }
  }, [finalValue, finalValue2, handleStartGame]);

  return (
    <div className='hang'>
      <p>Hanging Man</p>
      <div className="input">
        <TextField
          className='inputbox'
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={playerName}
          onChange={handleInputChange}
          size="small"
        />
        <Button
          className='submit-button'
          variant="outlined"
          size="big"
          onClick={handleSave}
        >
          Submit
        </Button>
        <TextField
          className='inputbox'
          id="outlined-basic"
          label="Name"
          size="small"
          variant="outlined"
          value={playerName2}
          onChange={handleInputChange2}
        />
        <Button
          className='submit-button'
          variant="outlined"
          onClick={handleSave2}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default InitialSetup;
