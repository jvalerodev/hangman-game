import BodyParts from './BodyDrawing';

interface Props {
  numberOfGuesses: number;
}

const HangmanDrawing = ({ numberOfGuesses }: Props) => {
  return (
    <div className="relative">
      {BodyParts.slice(0, numberOfGuesses)}

      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />

      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />

      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />

      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
};

export default HangmanDrawing;
