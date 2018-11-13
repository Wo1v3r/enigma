import * as Chance from 'chance';
import Translator from '../src/Translator';
import { LETTERS } from '../src/constants';
const chance = new Chance();

const chancePermutation = () =>
  chance.unique(() => chance.letter().toUpperCase(), LETTERS.length);

describe('Translator', () => {
  it('translates a letter forward', () => {
    const permutation = chancePermutation();
    const letter = chance.pickone(LETTERS);
    const translation = permutation[LETTERS.indexOf(letter)];
    const translator = new Translator(permutation);

    expect(translator.translateForward(letter)).toEqual(translation);
  });

  it('translates a letter backward', () => {
    const permutation = chancePermutation();
    const letter = chance.pickone(permutation);
    const translation = LETTERS[permutation.indexOf(letter)];

    const translator = new Translator(permutation);

    expect(translator.translateBackward(letter)).toEqual(translation);
  });
});
