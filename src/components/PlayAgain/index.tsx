import { Dispatch, SetStateAction } from 'react';
import { getWord } from '../../utils/words';

interface Props {
  setWordToGuess: Dispatch<SetStateAction<string>>;
  setEnteredLetters: Dispatch<SetStateAction<string[]>>;
}

const PlayAgain = ({ setWordToGuess, setEnteredLetters }: Props) => {
  const play = () => {
    setWordToGuess(getWord);
    setEnteredLetters([]);
  };

  return (
    <button
      className="bg-blue-600 text-white py-2 px-7 text-xl font-bold rounded-md hover:bg-blue-700 animate-pulse"
      onClick={play}
    >
      Play again
    </button>
  );
};

export default PlayAgain;
