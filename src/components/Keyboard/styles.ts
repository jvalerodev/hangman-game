import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;
`;

export const Button = styled.button`
  width: 100%;
  border: 3px solid black;
  background: none;
  aspect-ratio: 1 / 1;
  font-size: 2.5rem;
  text-transform: uppercase;
  padding: 0.5rem;
  font-weight: bold;
  color: #000;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: rgb(187, 247, 208);
  }

  &.active {
    background-color: rgb(22, 163, 74);
    color: #fff;
  }

  &.inactive {
    opacity: 0.3;
  }
`;
