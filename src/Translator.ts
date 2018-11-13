import Substitutor from './Substitutor';

export default class Translator extends Substitutor {
  permutations: string[];
  constructor(permutations: string[]) {
    super();
    this.permutations = permutations;
  }

  translateForward(letter: string) {
    return this.permutations[this.indexOf(letter)];
  }

  translateBackward(letter: string) {
    return this.letterOf(this.permutations.indexOf(letter));
  }
}
