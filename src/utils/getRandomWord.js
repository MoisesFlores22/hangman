import randomWords from 'random-words';

export default function getRandomWord(difficulty) {
  switch (difficulty) {
    case 'easy':
      return randomWords({ exactly: 1, maxLength: 3 });
    case 'medium':
      return randomWords({ exactly: 1, maxLength: 5 });
    case 'hard':
      return randomWords({ exactly: 1, maxLength: 9 });
    default:
      return '';
  }
}
