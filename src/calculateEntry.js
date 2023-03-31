const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => ({
  child: entrants.filter((it) => it.age < 18).length,
  adult: entrants.filter((it) => it.age >= 18 && it.age < 50).length,
  senior: entrants.filter((it) => it.age >= 50).length,
});

const calculateEntry = (entrants) => {
  const counts = countEntrants(Array.isArray(entrants) ? entrants : []);
  return Object.keys(counts)
    .reduce((acc, it) => acc + (counts[it] * prices[it]), 0);
};

module.exports = { calculateEntry, countEntrants };
