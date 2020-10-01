const {fun_facts} = require("../src/utils/fun_facts");


module.exports = () => {
    idx = Math.floor(Math.random()*fun_facts.length);

    console.log(`"${fun_facts[idx]["fact"]}" ${fun_facts[idx]["author"] != "" ? "-"+fun_facts[idx]["author"] : "" }`);
}