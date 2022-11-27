import { useState, useEffect, useCallback } from 'react';

const useKeyboard = (wordToGuess: string) => {
  const [enteredLetters, setEnteredLetters] = useState<string[]>([]);

  const correctLetters = enteredLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  const incorrectLetters = enteredLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isWinner = wordToGuess
    .split('')
    .every((letter) => correctLetters.includes(letter));

  const isLoser = incorrectLetters.length >= 6;

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (enteredLetters.includes(letter) || isWinner || isLoser) {
        return;
      }

      setEnteredLetters([...enteredLetters, letter.toLowerCase()]);
    },
    [enteredLetters, isWinner, isLoser]
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
  }, [enteredLetters]);

  return {
    enteredLetters,
    correctLetters,
    incorrectLetters,
    isWinner,
    isLoser,
    addGuessedLetter,
    setEnteredLetters
  };
};

export default useKeyboard;
