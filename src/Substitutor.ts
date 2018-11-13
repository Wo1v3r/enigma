import { LETTERS } from './constants';

export default abstract class Substitutor {
  abstract translateForward(letter: string): string;
  abstract translateBackward(letter: string): string;

  indexOf(letter: string): number {
    return LETTERS.indexOf(letter);
  }

  letterOf(index: number): string {
    return LETTERS[index];
  }

  shiftRight(index: number, offset: number): number {
    const halfWay = index + offset;

    const result = offset < 0 ? halfWay + LETTERS.length : halfWay;

    const modolu = result % LETTERS.length;

    return modolu;
  }

  shiftLeft(index: number, offset: number): number {
    return this.shiftRight(index, LETTERS.length - offset);
  }
}
