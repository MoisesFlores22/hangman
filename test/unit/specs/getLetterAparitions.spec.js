import getLetterAparitions from '@/utils/getLetterAparitions';

const testArray = ['a', 'd', 'd'];

describe('getLetterAparitions.js', () => {
  describe('letter appartions', () => {
    it('should be 2 appartions', () => {
      const resultArray = getLetterAparitions(testArray, 'd');
      expect(resultArray.length).toEqual(2);
    });

    it('should hav 0 apparitions', () => {
      const resultArray = getLetterAparitions(testArray, 'f');
      expect(resultArray.length).toEqual(0);
    });
  });
});
