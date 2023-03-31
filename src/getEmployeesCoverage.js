const data = require('../data/zoo_data');

const { employees, species } = data;

const coverage = (employee) => {
  const especiesResponsavel = species.filter((it) => employee.responsibleFor.includes(it.id));
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: especiesResponsavel.map((it) => it.name),
    locations: especiesResponsavel.flatMap((especie) => especie.location),
  };
};

const findEmployee = ({ name, id }) => employees.find((it) => {
  if (name) return it.firstName === name || it.lastName === name;
  if (id) return it.id === id;
  return false;
});

const getEmployeesCoverage = (options = {}) => {
  if (!options.name && !options.id) {
    return employees.map(coverage);
  }
  const employee = findEmployee(options);
  if (!employee) throw new Error('Informações inválidas');
  return coverage(employee);
};

module.exports = getEmployeesCoverage;
