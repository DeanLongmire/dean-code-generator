const fs = require("fs-extra");
const ejs = require("ejs");
const path = require("path");

async function generateWorkflows() {
    console.log("Creating workflows...");
    try {
        const rustTests = ".github/workflows/rust.yml";
        const format = ".github/workflows/format.yml";

        const data = {}
        const options = {}

        const rustTestsEjs = path.join(__dirname, "../templates/workflows/rust-tests.ejs");
        ejs.renderFile(rustTestsEjs, data, options, function(err, str) {
            if(err) {
                console.error(err);
            }

            const outputFile = path.join(process.cwd(), rustTests);
            fs.ensureFileSync(outputFile);
            fs.outputFileSync(outputFile, str);
        })

        const rustFormatEjs = path.join(__dirname, "../templates/workflows/rust-tests.ejs");
        ejs.renderFile(rustFormatEjs, data, options, function(err, str) {
            if(err) {
                console.error(err);
            }

            const outputFile = path.join(process.cwd(), format);
            fs.ensureFileSync(outputFile);
            fs.outputFileSync(outputFile, str);
        })
    } catch(err) {
        console.error(err);
    }
}

module.exports = {
    generateWorkflows
}