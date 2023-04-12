import { soma, subtracao } from '../src/operacoes';
describe('testar operação aritmetica', () => {
  test('soma', () => {
    let resultado = soma(2, 1);
    let esperado = 3;
    expect(resultado).toBe(esperado);
  });

  test('subtracao', () => {
    let resultado = subtracao(2, 1);
    let esperado = 1;
    expect(resultado).toBe(esperado);
  });
});
