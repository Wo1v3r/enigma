import * as Chance from 'chance';
import Reflector from '../src/Reflector';
import { LETTERS } from '../src/constants';
const chance = new Chance();

const chancePermutation = () =>
  chance.unique(() => chance.letter().toUpperCase(), LETTERS.length);

describe('Reflector', () => {
  it('translates a letter forward', () => {
    const permutation = chancePermutation();
    const letter = chance.pickone(LETTERS);
    const translation = permutation[LETTERS.indexOf(letter)];
    const reflector = new Reflector(permutation);

    expect(reflector.translateForward(letter)).toEqual(translation);
  });

  it('translates a letter backward as forward', () => {
    const permutation = chancePermutation();
    const letter = chance.pickone(LETTERS);
    const translation = permutation[LETTERS.indexOf(letter)];
    const reflector = new Reflector(permutation);

    expect(reflector.translateBackward(letter)).toEqual(translation);
  });
});
