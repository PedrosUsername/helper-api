const data = require('../../util/fake-data/loremIpsum');

export class LoremIpsumService {
  constructor() {}

  generate = (qtd: number) => {
    const textArray = data.text.split(' ');

    let text = textArray.slice(0, qtd).join(' ');

    // repete o lorem ipsum se quantidade de palavras requisitadas
    // for maior que o total de palavras registradas
    if(qtd > 69) {
      text = text + ' ' + textArray.slice(0, qtd - 69).join(' ');
    }

    return text;
  };
}
