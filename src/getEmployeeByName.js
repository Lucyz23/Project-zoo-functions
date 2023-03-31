const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (nome) => (
  nome
    ? employees.find((it) => it.firstName === nome || it.lastName === nome)
    : {}
);

module.exports = getEmployeeByName;
