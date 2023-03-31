const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => (ids
  ? species.filter((it) => ids.some((id) => id === it.id))
  : []);

module.exports = getSpeciesByIds;
