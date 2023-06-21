import React, { useState, useEffect } from 'react';
// import randomWords from 'random-words';
import './gamePlay.css';
import { Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

function GamePlay() {
  const [secretWord, setSecretWord] = useState('REACT'); 
  const [guessedWord, setGuessedWord] = useState('_'.repeat(secretWord.length));
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [inputLetter, setInputLetter] = useState([]);
  const [inputAnswer, setInputAnswer] = useState('');
  const [turnCount, setTurnCount] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  
  
  // useEffect(() => {
  //   setSecretWord(randomWords());
  // }, [])

  const handleLetterGuess = () => {
    const letter = inputLetter.toUpperCase();
    setInputLetter('');

    // Check if the letter is already guessed
    if(guessedLetters.includes(letter)) {
      alert('Letter already guessed. Try a different letter');
      return;
    }

    // Check if the letter is correct
    const isLetterCorrect = secretWord.includes(letter);
    const newGuessedWord = guessedWord
      .split('')
      .map((char, index) => (secretWord[index] === letter ? letter : char))
      .join('');

    if (!isLetterCorrect) {
      setWrongGuesses([...wrongGuesses, letter]);
    if(wrongGuesses.length >=4) {
      alert('Game over. You have reached the maximul number of wrong guesses')
    }
    }

    setGuessedWord(newGuessedWord);
    setTurnCount(turnCount + 1);
    setGuessedLetters([
      ...guessedLetters,
      {letter: letter, date:new Date() },
    ]);
  };

  const handleAnswerGuess = () => {
    if (wrongGuesses.length >=4) {
      alert('Game over. You have reached the maximum number of guesses');
      return;
    }

    const answer = inputAnswer.toUpperCase();
    setInputAnswer('');

    if (answer === secretWord) {
      alert("Congratulations, you guessed the word")
      setGuessedWord(answer);
    } else {
      alert("Wrong answer")
      setWrongGuesses([...wrongGuesses, answer])
    }
      setTurnCount(turnCount + 1);
  };

  const handleLetterInputChange = (event) => {
    const inputLetter = event.target.value.toUpperCase();

  if (inputLetter.length === 1 && inputLetter.match(/[A-Z]/i)) {
    setInputLetter(inputLetter);
  }
  };

  const handleAnswerInputChange = (event) => {
    const inputValue=event.target.value;
    const lettersOnly = /^[A-Za-z]+$/;

    if(lettersOnly.test(inputValue) || inputValue === ''){
      setInputAnswer(inputValue.toUpperCase());
    }
  };

  const renderWrongGuessesTable = () => {
    return (
      <table>
        <tbody>
          <tr>
            {wrongGuesses.map((_, index) => (
              <td key={index}>X</td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  };
  

  const renderTableRows = () => {
    const rows = [];
    for (let i = 0; i < guessedLetters.length; i++) {
      const turn = i + 1;
      const guessedLetter = guessedLetters[i];
      const letter = guessedLetter ? guessedLetter.letter : "";
      const isValid = secretWord.includes(letter);
      const date = guessedLetter ? guessedLetter.date.toLocaleString() : "";
  
      rows.push(
        <tr key={turn}>
          <td>{turn}</td>
          <td>{letter}</td>
          <td>{isValid ? 'Yes' : 'No'}</td>
          <td>{date}</td>
        </tr>
      );
    }
    return rows;
  };
  

  return (
    <div className='container'>
      <Typography vaiant="h2">Hangman</Typography>
      <div>
      <Typography variant="h4">Secret Word</Typography>
      <Typography variant="body1">{guessedWord.split('').join(' ')}</Typography>
      </div>

      <div>
        <Typography variant="h6">Guess a letter</Typography>
        <TextField
          size="small"
          className='input-field'
          type="text"
          value={inputLetter}
          onChange={handleLetterInputChange}
          maxLength={1}
        />
        <Button variant="contained" onClick={handleLetterGuess}>Submit</Button>
      </div>

      <div>
        <Typography variant="h6">Guess the word</Typography>
        <TextField
          size="small"
          type="text"
          value={inputAnswer}
          onChange={handleAnswerInputChange}
        />
        <Button variant="contained" onClick={handleAnswerGuess}>Submit</Button>
      </div>

      <Table className='detable' size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell>Letter</TableCell>
            <TableCell>Valid</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTableRows()}
        </TableBody>
      </Table>
      <br></br>
      <div>
      <Typography variant="h7">Wrong guesses:</Typography>
      <br></br>
      <Typography variant="body6">{wrongGuesses.join(', ')}</Typography>
        <br></br>

      {/* <div>
       <Table>
        <TableBody>
        {renderWrongGuessesTable()}
        </TableBody>
      </Table>  */}
        
      {/* </div> */}
      
        
      </div>


    </div>
  );
}

export default GamePlay;
