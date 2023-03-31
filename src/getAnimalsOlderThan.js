const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (nome, idade) =>
  species.find((it) => it.name === nome)
    .residents
    .every((it) => it.age >= idade);

module.exports = getAnimalsOlderThan;
