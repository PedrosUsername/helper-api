export class ArrayService {
  constructor() {}

  tratarArrayEx002 = (arr: string[] | number[], sort: string, allowDuplicates: string) => {
    let result;

    if(allowDuplicates === 'no'){
      result = [...new Set(Array.of(...arr))];
    } else {
      result = arr;
    }

    if(sort === 'desc'){
      result = result.sort().reverse();
    } else {
      result = result.sort()
    }

    return result;
  };
}
