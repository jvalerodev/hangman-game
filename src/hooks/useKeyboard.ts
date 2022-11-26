import { useState, useEffect, useCallback } from 'react';

const useKeyboard = (wordToGuess: string) => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters([...guessedLetters, letter.toLowerCase()]);
    },
    [guessedLetters]
  );

  const handler = (e: KeyboardEvent) => {
    const { key } = e;

    if (!key.match(/^[A-Za-z]+$/)) return;

    e.preventDefault();
    addGuessedLetter(key);
  };

  useEffect(() => {
    document.addEventListener('keypress', handler);

    return () => document.removeEventListener('keypress', handler);
  }, [guessedLetters]);

  return { guessedLetters, incorrectLetters };
};

export default useKeyboard;
