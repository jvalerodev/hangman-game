import { useState } from 'react';
import HangmanDrawing from './components/HangmanDrawing';
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
    </div>
  );
};

export default App;
