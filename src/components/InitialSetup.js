import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import './initialSetup.css';

function InitialSetup({ handleStartGame }) {
  const [playerName, setPlayerName] = useState('');
  // const [playerName2, setPlayerName2] = useState('');
  const [finalValue, setFinalValue] = useState('');
  // const [finalValue2, setFinalValue2] = useState('');

  const handleInputChange = (event) => {
    setPlayerName(event.target.value);
  };

  // const handleInputChange2 = (event) => {
  //   setPlayerName2(event.target.value);
  // };

  const handleSave = () => {
    setFinalValue(playerName);
  };

  // const handleSave2 = () => {
  //   setFinalValue2(playerName2);
  // };

  useEffect(() => {
    if (finalValue) {
      handleStartGame();
    }
  }, [finalValue, handleStartGame]);

  return (
    <div className='hang'>
      <Typography variant="h5">Hangman</Typography>
      <Typography variant="h9">Please enter your name in order to start the game:</Typography>
      <br></br>
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
          variant="contained"
          size="big"
          onClick={handleSave}>
          Submit
        </Button>
        
        {/* <TextField
          className='inputbox'
          id="outlined-basic"
          label="Name"
          size="small"
          value={playerName2}
          onChange={handleInputChange2}
        />
        <Button
          className='submit-button'
          variant="contained"
          onClick={handleSave2}
        >
          Submit
        </Button> */}
      </div>
      <div className='rules'>
      <Typography variant="h4">Rules</Typography>
      
      <Typography variant="h20">Hangman is an entertaining word-guessing game where your goal is to uncover a hidden word.</Typography>
      <br></br>
      <Typography variant="h20">Let your imagination run wild as you embark on this linguistic adventure!</Typography>
      <br></br>
      <Typography variant="h20"> Guess one letter at a time. If correct, the letters will be revealed; if incorrect, you receive a strike.</Typography>
      <br></br>
      <Typography variant="h20"> You have 5 strikes before the game ends. Win by guessing the entire word or lose if you accumulate 5 strikes.</Typography>
      <br></br>
      <Typography variant="h20"> Enjoy the challenge!</Typography>      
      </div>
    </div>
  );
}

export default InitialSetup;
