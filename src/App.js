import React, {useState} from 'react';
import './App.css';
import InitialSetup from './components/InitialSetup';
import GamePlay from './components/GamePlay';

function App() {

      const[isFirstStep, setIsFirstStep] = useState(true);
      const[playerName, setPlayerName]= useState('');
      const[playerName2, setPlayerName2]= useState('');

      const handleStartGame = () => {
        if (!(playerName && playerName2)) {
          setIsFirstStep(false);
          console.log(playerName, playerName2)
        } else {
          alert("Please enter player names")
        }
      }

  return (
    <div>
    {isFirstStep ? (
      <InitialSetup
        playerName={setPlayerName}
        playerName2={setPlayerName2}
        handleStartGame={handleStartGame}
      />
    ) : (
      <GamePlay playerName={playerName} playerName2={playerName2} />
    )}
  </div>
  );
}

export default App;
