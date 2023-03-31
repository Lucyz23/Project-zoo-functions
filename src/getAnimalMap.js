const data = require('../data/zoo_data');

const { species } = data;

const getAnimalNames = (residents, sex) =>
  residents
    .filter((animal) => (sex ? animal.sex === sex : true))
    .map((animal) => animal.name);

const getWithNames = (sorted, sex) => species.reduce((acc, it) => ({
  ...acc,
  [it.location]: [
    ...(acc[it.location] || []),
    {
      [it.name]:
        sorted
          ? getAnimalNames(it.residents, sex).sort()
          : getAnimalNames(it.residents, sex),
    },
  ],
}), {});

const getWithoutNames = () => species.reduce((acc, it) => ({
  ...acc,
  [it.location]: [
    ...(acc[it.location] || []),
    it.name,
  ],
}), {});

const getAnimalMap = ({ includeNames, sorted, sex } = {}) => (includeNames
  ? getWithNames(sorted, sex)
  : getWithoutNames()
);

module.exports = getAnimalMap;
