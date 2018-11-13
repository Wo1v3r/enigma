import * as Chance from 'chance';
import PlugBoard from '../src/PlugBoard';
import { LETTERS } from '../src/constants';
import { chunk } from 'lodash';

const chance = new Chance();

const chanceSpec = () =>
  chunk(chance.unique(() => chance.letter().toUpperCase(), 20), 2) as [
    string,
    string
  ][];

describe('PlugBoard', () => {
  it('translates a letter forward by passed spec', () => {
    const spec = chanceSpec();
    const letter = chance.pickone(LETTERS);
    const translationSpec = spec
      .filter(([a, b]) => a === letter || b === letter)
      .map(([a, b]) => (a === letter ? b : a));

    const translation = translationSpec[0] || letter;
    const plugBoard = new PlugBoard(spec);

    expect(plugBoard.translateForward(letter)).toEqual(translation);
  });

  it('translates a letter backward by passed spec', () => {
    const spec = chanceSpec();
    const letter = chance.pickone(LETTERS);
    const translationSpec = spec
      .filter(([a, b]) => a === letter || b === letter)
      .map(([a, b]) => (a === letter ? b : a));

    const translation = translationSpec[0] || letter;

    const plugBoard = new PlugBoard(spec);

    expect(plugBoard.translateBackward(letter)).toEqual(translation);
  });
});
