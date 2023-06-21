import React, {useState} from 'react';
import {TextField,Button} from '@mui/material';
import './initialSetup.css';

function InitialSetup({handleStartGame}){

    
    const[playerName, setPlayerName]=useState('');
    const[playerName2, setPlayerName2]=useState('');
    const[finalValue, setFinalValue]= useState('');
    const[finalValue2, setFinalValue2]= useState('');

    
    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
      };

      const handleInputChange2 = (event) => {
        setPlayerName2(event.target.value);
      };

      const handleSave = () => {
        setFinalValue(playerName)
        console.log('Player 1: ', playerName);
      };  

      const handleSave2 = () => {
        setFinalValue2(playerName2)
        console.log('Player 2: ', playerName2);
      };

      const handleSubmit = () => {
        handleStartGame();
      }

    return(
        <span >Hanging Man
                <div classsname="input">
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={playerName} onChange={handleInputChange} />
                    <Button variant="outlined" onClick={handleSave}>Submit</Button>
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={playerName2} onChange={handleInputChange2} />
                    <Button variant="outlined" onClick={handleSave2}>Submit</Button>
                    <Button onClick={handleSubmit}>Start Game</Button>
                </div>
                <div classsname="input">
                <p>Player 1:{finalValue}</p>
                <p>Player 2:{finalValue2}</p>
                </div>
        </span>
    )
}



export default InitialSetup;