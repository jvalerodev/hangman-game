interface Props {
  guessedLetters: string[];
  wordToGuess: string;
}

const HangmanWord = ({ guessedLetters, wordToGuess }: Props) => {
  return (
    <div className="flex gap-[0.25em] text-8xl text-blue-500 font-bold uppercase font-[monospace]">
      {wordToGuess.split('').map((letter, i) => (
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
