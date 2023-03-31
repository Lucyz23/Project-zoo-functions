const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((acc, it) => ({
      ...acc,
      [it.name]: it.residents.length,
    }), {});
  }

  const especie = species.find((it) => it.name === animal.specie);
  const animaisDaEspecie = especie ? especie.residents : [];

  if (animal.sex) {
    return animaisDaEspecie.filter((it) => it.sex === animal.sex)
      .length;
  }

  return animaisDaEspecie.length;
};

module.exports = countAnimals;
