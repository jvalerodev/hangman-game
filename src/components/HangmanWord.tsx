const HangmanWord = () => {
  const word = 'test';
  const guessedLetters: string[] = [];

  return (
    <div className="flex gap-[0.25em] text-8xl text-blue-500 font-bold uppercase font-[monospace]">
      {word.split('').map((letter, i) => (
        <span key={i} className="border-b-[0.1em] border-black">
          <span
            className={`${!guessedLetters.includes(letter) && 'invisible'}`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
