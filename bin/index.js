#!/usr/bin/env node
const {fun_facts} = require("../src/utils/fun_facts");
const colours = require("../src/utils/colours");

idx = Math.floor(Math.random()*fun_facts.length);

console.log(`${colours.fgYellow}"${fun_facts[idx]["fact"]}" ${fun_facts[idx]["author"] != "" ? "-"+fun_facts[idx]["author"] : "" }${colours.reset}`);
