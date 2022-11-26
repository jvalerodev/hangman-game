import { useState } from 'react';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import words from './word-list.json';

const App = () => {
  const [word, setWord] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );

  const [letters, setLetters] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-[2rem] mx-auto items-center max-w-[800px]">
      <div className="text-[2rem] text-center">Lose Win</div>

      <HangmanDrawing />

      <HangmanWord />

      <div className="self-stretch">
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
