import { Container, Button } from './styles';
import Keys from './keys';

const Keyboard = () => {
  return (
    <Container>
      {Keys.map((key) => (
        <Button key={key}>{key}</Button>
      ))}
    </Container>
  );
};

export default Keyboard;
