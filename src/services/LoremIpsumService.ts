const data = require('../../util/fake-data/loremIpsum');

export class LoremIpsumService {
  constructor() {}

  generate(qtd: number): string {
    if(qtd < 1) {
      return '';
    }

    const separador = qtd < 70 ? '' : ' ';

    return data.text
      .split(' ')
      .slice(0, qtd)
      .join(' ')
      .concat(separador, this.generate(qtd - 69));
  };
}
