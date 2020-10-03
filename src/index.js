const { funFacts } = require('./utils/fun_facts');

module.exports = () => {
  const idx = Math.floor(Math.random() * funFacts.length);

  console.log(`"${funFacts[idx].fact}" ${funFacts[idx].author !== '' ? `-${funFacts[idx].author}` : ''}`);
};
