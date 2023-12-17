#!/usr/bin/env node

const argv = require("yargs-parser")(process.argv.slice(2));
const { generateCargoRust } = require("./repos/cargo-rust/index.js");

const main = () => {
    try {
        const { _: args} = argv;
        generator = args[0];

        const cases = {
            'cargo': () => generateCargoRust(),
            'default': () => console.log("Usage error: dean-generator cargo"),
        };
        
        (cases[generator] || cases['default'])();
    } catch(err) {
        console.error(err);
    }
}

main()