import { ArrayService } from "../../src/services/ArrayService";

let service = new ArrayService;

test('deve instanciar service', () => {
    service = new ArrayService;
});

test('ex002 deve poder ordenar array vazio', () => {
    expect(service.tratarArrayEx002([], 'asc', 'yes')).toStrictEqual([]);
});

test('ex002 deve poder ordenar array de numeros asc', () => {
    expect(service.tratarArrayEx002([9, 8, 7, 6], 'asc', 'yes')).toStrictEqual([6, 7, 8, 9]);
});

test('ex002 deve poder ordenar array de strings', () => {
    expect(service.tratarArrayEx002(['zebra', 'jaime', 'alemao'], 'asc', 'yes')).toStrictEqual(['alemao', 'jaime', 'zebra']);
});