const app = require('../src/index');
let {fun_facts} = require('../src/utils/fun_facts');


/**
 * checking for the random generated number, 
 * this is not just Math.random(), 
 * insted Math.floor(Math.random()*fun_facts.length);
 */
describe(`if the random generated number is 0`, () => {
    it(`should show the first fact`, () => {
        console.log = jest.fn(); // mock console.log
        Math.random = jest.fn(x => 0.123); // mock Math.random
        app(); // running app
        
        let printedFact = console.log.mock.calls[0][0].replace(/\"/g, '');
        
        let index = fun_facts.findIndex((f) => {
            let formedFact = f.fact +' '+ (f.author?'-'+f.author:'');
            return printedFact == formedFact;
        });


        expect(index).toBe(0);
    });
})
