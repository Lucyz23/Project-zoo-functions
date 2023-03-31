const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getOldestFromFirstSpecies = (id) => {
  try {
    const [idPrimeiraEspecie] = employees.find((it) => it.id === id).responsibleFor;
    const animais = species.find((it) => it.id === idPrimeiraEspecie).residents;
    const { name, sex, age } = animais
      .reduce(
        (acc, it) => (acc.age > it.age ? acc : it),
        { age: -Infinity },
      );
    return [name, sex, age];
  } catch (err) {
    throw new Error(`Erro buscando espécie: ${err.message}`);
  }
};

module.exports = getOldestFromFirstSpecies;
