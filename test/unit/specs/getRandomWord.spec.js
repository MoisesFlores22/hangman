import getRandomWord from '@/utils/getRandomWord';

describe('gerRandomWord.js', () => {
  it('should get word of maximum 3 letters if difficulty is set to easy', () => {
    const word = getRandomWord('easy');
    expect(word.length).toBeLessThanOrEqual(3);
  });

  it('should get word of maximum 5 letters if difficulty is set to medium', () => {
    const word = getRandomWord('medium');
    expect(word.length).toBeLessThanOrEqual(5);
  });

  it('should get word of maximum 9 letters if difficulty is set to hard', () => {
    const word = getRandomWord('hard');
    expect(word.length).toBeLessThanOrEqual(9);
  });
});
