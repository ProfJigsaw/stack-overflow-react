import mode from '../utilities/mode';

const array = [1, 2, 1];

describe('Mode function:', () => {
  it('should return the most occuring item in an array', () => {
    expect(mode(array)).toBe(1);
  });
});
