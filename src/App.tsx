import { useEffect, useState } from 'react';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import words from './word-list.json';
import useKeyboard from './hooks/useKeyboard';

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );

  const { guessedLetters, incorrectLetters } = useKeyboard(wordToGuess);

  return (
    <div className="flex flex-col gap-[2rem] mx-auto items-center max-w-[800px]">
      <div className="text-[2rem] text-center">Lose Win</div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />

      <div className="self-stretch">
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
