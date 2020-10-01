const app = require('../src/index');
const { funFacts } = require('../src/utils/fun_facts');

/**
 * checking for the random generated number,
 * this is not just Math.random(),
 * insted Math.floor(Math.random()*funFacts.length);
 */
describe('if the random generated number is 0', () => {
  it('should show the first fact', () => {
    console.log = jest.fn(); // mock console.log
    Math.random = jest.fn(() => 0.123); // mock Math.random
    app(); // running app

    const printedFact = console.log.mock.calls[0][0].replace(/"/g, '');

    const index = funFacts.findIndex((f) => {
      const formedFact = `${f.fact} ${f.author ? `-${f.author}` : ''}`;
      return printedFact === formedFact;
    });

    expect(index).toBe(0);
  });
});
