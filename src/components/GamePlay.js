import React, { useState, useEffect } from 'react';
// import randomWords from 'random-words';

function GamePlay() {
  const [secretWord, setSecretWord] = useState('HELLO'); 
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

    // Check if the letter is correct
    const isLetterCorrect = secretWord.includes(letter);
    const newGuessedWord = guessedWord
      .split('')
      .map((char, index) => (secretWord[index] === letter ? letter : char))
      .join('');

    if (!isLetterCorrect) {
      setWrongGuesses([...wrongGuesses, letter]);
    }

    setGuessedWord(newGuessedWord);
    setTurnCount(turnCount + 1);
    setGuessedLetters([
      ...guessedLetters,
      {letter: letter, date:new Date() },
    ]);
  };

  const handleAnswerGuess = () => {
    const answer = inputAnswer.toUpperCase();
    setInputAnswer('');

    if (answer === secretWord) {
      alert("Congratulations, you got the word")
      setGuessedWord(answer);
    } else {
      alert("Wrong answer")
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
    setInputAnswer(event.target.value);
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
    <div>
      <h2>Hangman Game</h2>

      <div>
        <h3>Guess a letter</h3>
        <input
          type="text"
          value={inputLetter}
          onChange={handleLetterInputChange}
          maxLength={1}
          style={{textTransform: "uppercase"}}
        />
        <button onClick={handleLetterGuess}>Submit</button>
      </div>

      <div>
        <h3>Guess the word</h3>
        <input
          type="text"
          value={inputAnswer}
          onChange={handleAnswerInputChange}
        />
        <button onClick={handleAnswerGuess}>Submit</button>
      </div>

      <div>
        <h3>Guessed Word</h3>
        <p>{guessedWord.split('').join(' ')}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Letter</th>
            <th>Valid</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

      <div>
        <h3>Wrong Guesses</h3>
        <p>{wrongGuesses.join(', ')}</p>
        {renderWrongGuessesTable()}
      </div>


    </div>
  );
}

export default GamePlay;
