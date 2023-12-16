const fs = require("fs-extra");
const ejs = require("ejs");
const argv = require("yargs-parser")(process.argv.slice(2));
const path = require("path");
const { generateGitignore } = require("./gen-gitignore.js")

const main = () => {
    console.log("Generating files...");
    try {
        generateGitignore();
    } catch(err) {
        console.error(err);
    }
}

main()