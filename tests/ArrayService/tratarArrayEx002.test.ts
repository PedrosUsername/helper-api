import { ArrayService } from "../../src/services/ArrayService";

let service = new ArrayService;
const NUMBERS_ARRAY = [9, 8, 7, 6, 6];
const WORDS_ARRAY = ["zebra", "jaime", "alemao", "jaime"];

test('deve instanciar service', () => {
    service = new ArrayService;
});




test('ex002 deve poder ordenar array vazio', () => {
    expect(service.tratarArrayEx002([], 'asc', 'yes')).toStrictEqual([]);
});





test('ex002 deve poder ordenar array de numeros asc', () => {
    expect(service.tratarArrayEx002(NUMBERS_ARRAY, 'asc', 'yes')).toStrictEqual([6, 6, 7, 8, 9]);
});

test('ex002 deve poder ordenar array de numeros desc', () => {
    expect(service.tratarArrayEx002(NUMBERS_ARRAY, 'desc', 'yes')).toStrictEqual([9, 8, 7, 6, 6]);
});

test('ex002 deve poder ordenar array de numeros desc sem repeticoes', () => {
    expect(service.tratarArrayEx002(NUMBERS_ARRAY, 'desc', 'no')).toStrictEqual([9, 8, 7, 6]);
});



test('ex002 deve poder ordenar array de strings asc', () => {
    expect(service.tratarArrayEx002(WORDS_ARRAY, 'asc', 'yes')).toStrictEqual(['alemao', 'jaime', 'jaime', 'zebra']);
});

test('ex002 deve poder ordenar array de strings desc', () => {
    expect(service.tratarArrayEx002(WORDS_ARRAY, 'desc', 'yes')).toStrictEqual(['zebra', 'jaime', 'jaime', 'alemao']);
});

test('ex002 deve poder ordenar array de strings desc sem repeticoes', () => {
    expect(service.tratarArrayEx002(WORDS_ARRAY, 'desc', 'no')).toStrictEqual(['zebra', 'jaime', 'alemao']);
});
