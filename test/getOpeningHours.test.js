const data = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

const { hours } = data;

describe('Testes da função getOpeningHours', () => {
  it('Retorna a agenda se não receber argumentos', () => {
    const expected = hours;
    expect(getOpeningHours()).toBe(expected);
  });

  it('Retorna que o zoológico está fechado às segundas', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(expected);
  });

  it('Retorna que o zoológico está aberto terça de manhã', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(expected);
  });

  it('Retorna que o zoológico está fechado quarta a noite', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(expected);
  });

  it('Lança um erro se o dia não for válido', () => {
    const expected = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(expected);
  });

  it('Lança um erro para abreviações inválidas', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(expected);
  });

  it('Lança um erro para hora inválida', () => {
    const expected = 'The hour should represent a number';
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(expected);
  });

  it('Lança um erro para minutos inválidos', () => {
    const expected = 'The minutes should represent a number';
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(expected);
  });

  it('Lança um erro para hora além dos limites', () => {
    const expected = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(expected);
  });

  it('Lança um erro para minutos além dos limites', () => {
    const expected = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(expected);
  });
});
