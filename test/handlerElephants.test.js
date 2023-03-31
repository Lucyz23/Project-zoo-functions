const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade de elefantes ao receber `count`', () => {
    const expected = 4;
    expect(handlerElephants('count')).toBe(expected);
  });

  it('Retorna o nome dos elefantes ao receber `names`', () => {
    const expected = 'Jefferson';
    expect(handlerElephants('names')).toContain(expected);
  });

  it('Retorna a média de idades ao receber `averageAge`', () => {
    const expected = 10.5;
    expect(handlerElephants('averageAge')).toBeCloseTo(expected);
  });

  it('Retorna a localização dos elefantes ao receber `location`', () => {
    const expected = 'NW';
    expect(handlerElephants('location')).toBe(expected);
  });

  it('Retorna a popularidade dos elefantes ao receber `popularity`', () => {
    const expected = 5;
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(expected);
  });

  it('Retorna os dias da semana em que elefantes estão disponíveis ao receber `availability`', () => {
    const notExpected = 'Monday';
    expect(handlerElephants('availability')).not.toContain(notExpected);
  });

  it('Retorna undefined se não receber argumentos', () => {
    const expected = undefined;
    expect(handlerElephants()).toBe(expected);
  });

  it('Retorna mensagem de erro se receber parâmetro não-string', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants({})).toBe(expected);
  });

  it('Retorna null se receber uma string inesperada', () => {
    const expected = null;
    expect(handlerElephants('ação inesperada')).toBe(expected);
  });
});
