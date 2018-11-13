import Substitutor from './Substitutor';
import Rotor from './Rotor';
import Reflector from './Reflector';
import PlugBoard from './PlugBoard';

export default class Enigma extends Substitutor {
  constructor(
    private rotors: Rotor[],
    private reflector: Reflector,
    private plugBoard: PlugBoard
  ) {
    super();
  }

  private turnover() {
    const [left, middle, right] = this.rotors;

    if (right.turnover || middle.turnover) {
      if (middle.turnover) {
        left.shiftOffsetRight();
      }
      middle.shiftOffsetRight();
    }
    right.shiftOffsetRight();
  }

  translateForward(letter: string) {
    return [...this.rotors, this.plugBoard].reduceRight(
      (translation, component: Substitutor) =>
        component.translateForward(translation),
      letter
    );
  }

  translateBackward(letter: string) {
    return [...this.rotors, this.plugBoard].reduce(
      (translation, component: Substitutor) =>
        component.translateBackward(translation),
      letter
    );
  }

  translateMiddle(letter: string) {
    return this.reflector.translateForward(letter);
  }

  decrypt(letters: string[]) {
    return letters.reduce((translation, letter) => {
      this.turnover();
      return (translation += this.translateBackward(
        this.translateMiddle(this.translateForward(letter))
      ));
    }, '');
  }
}
