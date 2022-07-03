const data = require('../../util/fake-data/loremIpsum');

export class LoremIpsumService {
  constructor() {}

  generate = (qtd: number) => {
    const textArray = data.text.split(' ');
    const text = textArray.slice(0, qtd).join(' ');

    return text;
  };
}
