import words from '../word-list.json';

export const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
