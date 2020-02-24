export default function getLetterAparitions(currentWordArray, letter) {
  return currentWordArray
    .map((element, i) => (element === letter ? i : -1))
    .filter(index => index !== -1);
}
