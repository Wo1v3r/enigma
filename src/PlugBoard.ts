import Substitutor from './Substitutor';

export default class PlugBoard extends Substitutor {
  private specMap: Map<string, string>;
  constructor(spec: [string, string][]) {
    super();
    const allSpecs = [
      ...spec,
      ...spec.map<[string, string]>(([a, b]) => [b, a])
    ];

    this.specMap = new Map(allSpecs);
  }

  translateForward(letter: string): string {
    return this.specMap.get(letter) || letter;
  }

  translateBackward(letter: string): string {
    return this.translateForward(letter);
  }
}
