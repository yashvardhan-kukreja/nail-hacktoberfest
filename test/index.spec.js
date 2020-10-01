const app = require('../src/index');
const {fun_facts} = require('../src/utils/fun_facts');


describe(`when runnig once`, () => {
    it(`should log the fun fact with the author if there is one`, () => {
        console.log = jest.fn(); // mock console.log
        app(); // running app
        
        let printedFact = console.log.mock.calls[0][0].replace(/\"/g, '');
        
        let index = fun_facts.findIndex((f) => {
            let formedFact = f.fact +' '+ (f.author?'-'+f.author:'');
            return printedFact == formedFact;
        });

        expect(index).toBeGreaterThan(-1);
    })
})