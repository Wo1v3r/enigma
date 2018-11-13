import Enigma from './Enigma';
import Rotor from './Rotor';
import Reflector from './Reflector';
import PlugBoard from './PlugBoard';

import {
  plugBoardSpec,
  reflectorPermutation,
  offset2,
  offset4,
  offset5,
  setting2,
  setting4,
  setting5,
  code
} from './constants';

const plugBoard = new PlugBoard(plugBoardSpec);
const reflector = new Reflector(reflectorPermutation);

const rotors = [
  new Rotor('AJDKSIRUXBLHWTMCQGZNPYFVOE'.split(''), offset2, setting2, 5),
  new Rotor('VZBRGITYUPSDNHLXAWMJQOFECK'.split(''), offset5, setting5, 26),
  new Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB'.split(''), offset4, setting4, 10)
];

const enigma = new Enigma(rotors, reflector, plugBoard);

const translation = enigma
  .decrypt(code)
  .split('X')
  .join('\n');

console.info(translation);
