import Translator from './Translator';

export default class Rotor extends Translator {
  constructor(
    permutations: string[],
    private ringOffset: number,
    private ringSetting: number,
    private turnoverNotch: number
  ) {
    super(permutations);
  }

  get turnover() {
    return this.turnoverNotch === this.ringOffset;
  }

  shiftOffsetRight() {
    this.ringOffset = this.shiftRight(this.ringOffset, 1);
  }

  private shiftRightLeft(letter) {
    return this.shiftLeft(
      this.shiftRight(this.indexOf(letter), this.ringOffset - 1),
      this.ringSetting - 1
    );
  }

  translateForward(letter) {
    return this.letterOf(
      this.shiftRight(
        this.indexOf(
          super.translateForward(this.letterOf(this.shiftRightLeft(letter)))
        ),
        this.ringSetting - this.ringOffset
      )
    );
  }

  translateBackward(letter) {
    return this.letterOf(
      this.shiftRight(
        this.indexOf(
          super.translateBackward(this.letterOf(this.shiftRightLeft(letter)))
        ),
        this.ringSetting - this.ringOffset
      )
    );
  }
}
