import { useState } from 'react';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import useKeyboard from './hooks/useKeyboard';
import Message from './components/Message';
import PlayAgain from './components/PlayAgain';
import { getWord } from './utils/words';

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const {
    enteredLetters,
    correctLetters,
    incorrectLetters,
    isWinner,
    isLoser,
    addGuessedLetter,
    setEnteredLetters
  } = useKeyboard(wordToGuess);

  return (
    <div className="flex flex-col gap-[2rem] mx-auto items-center max-w-[800px] bg-gray-100 px-5 rounded h-screen">
      <div className="flex items-center space-x-7 pt-5">
        {isWinner && <Message msg="Winner!" style="bg-green-500" />}

        {isLoser && <Message msg="Nice try!" style="bg-red-500" />}

        {(isWinner || isLoser) && (
          <PlayAgain
            setWordToGuess={setWordToGuess}
            setEnteredLetters={setEnteredLetters}
          />
        )}
      </div>

      <HangmanDrawing attempts={incorrectLetters.length} />

      <HangmanWord
        enteredLetters={enteredLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />

      <div className="self-stretch">
        <Keyboard
          activeLetters={correctLetters}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
};

export default App;
