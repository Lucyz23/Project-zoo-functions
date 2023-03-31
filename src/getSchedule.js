const data = require('../data/zoo_data');

const { species, hours } = data;

const isEspecie = (param) => (especie) => especie.name === param;
const isOpen = (day) => hours[day].open !== 0 && hours[day].close !== 0;

const getOfficeHour = (diaDaSemana) => (
  isOpen(diaDaSemana)
    ? `Open from ${hours[diaDaSemana].open}am until ${hours[diaDaSemana].close}pm`
    : 'CLOSED'
);

const getExhibition = (diaDaSemana) => (
  isOpen(diaDaSemana)
    ? species
      .filter((it) => it.availability.includes(diaDaSemana))
      .map((it) => it.name)
    : 'The zoo will be closed!'
);

const getSchedule = (param) => (
  // se o parâmetro for o nome de uma espécie...
  species.some(isEspecie(param))
    // retornar só os dias que essa espécie está disponível;
    ? species.find(isEspecie(param)).availability
    // senão...
    : Object.keys(hours)
      // se o parâmetro for o nome de um dia, filtrar por esse dia.
      .filter((diaDaSemana, _index, arr) => (arr.includes(param) ? diaDaSemana === param : true))
      // retornar o relatório da agenda
      .reduce((acc, diaDaSemana) => ({
        ...acc,
        [diaDaSemana]: {
          officeHour: getOfficeHour(diaDaSemana),
          exhibition: getExhibition(diaDaSemana),
        },
      }), {})
);

module.exports = getSchedule;
