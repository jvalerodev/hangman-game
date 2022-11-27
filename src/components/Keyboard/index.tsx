import { Container, Button } from './styles';
import Keys from './keys';

interface Props {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
}

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled
}: Props) => {
  return (
    <Container>
      {Keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <Button
            key={key}
            onClick={() => addGuessedLetter(key)}
            className={`${isActive && 'active'} ${isInactive && 'inactive'}`}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </Button>
        );
      })}
    </Container>
  );
};

export default Keyboard;
