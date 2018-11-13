import Translator from './Translator';

export default class Reflector extends Translator {
  translateBackward(letter: string) {
    return this.translateForward(letter);
  }
}
