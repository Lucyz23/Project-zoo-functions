const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) =>
  employees.some((it) => it.managers.includes(id));

const getRelatedEmployees = (id) => {
  if (!isManager(id)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees
    .filter((it) => it.managers.includes(id))
    .map((it) => `${it.firstName} ${it.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
