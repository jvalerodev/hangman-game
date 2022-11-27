interface Props {
  enteredLetters: string[];
  wordToGuess: string;
  reveal: boolean;
}

const HangmanWord = ({ enteredLetters, wordToGuess, reveal }: Props) => {
  return (
    <div className="flex gap-[0.25em] text-8xl text-green-600 font-bold uppercase font-[monospace]">
      {wordToGuess.split('').map((letter, i) => (
        <span key={i} className="border-b-[0.1em] border-black">
          <span
            className={`
              ${!enteredLetters.includes(letter) && !reveal && 'invisible'}
              ${!enteredLetters.includes(letter) && reveal && 'text-red-600'}
            `}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
