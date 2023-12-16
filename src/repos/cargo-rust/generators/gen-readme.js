const fs = require("fs-extra");
const ejs = require("ejs");
const path = require("path");

function generateReadme(repoName) {
    console.log("Creating readme...");
    try {
        const out = "readme.md";

        const data = {
            repoName
        }
        const options = {}

        const filename = path.join(__dirname, "../templates/readme.ejs");
        ejs.renderFile(filename, data, options, function(err, str) {
            if(err) {
                console.error(err);
            }

            const outputFile = path.join(process.cwd(), out);
            fs.ensureFileSync(outputFile);
            fs.outputFileSync(outputFile, str);
        })
    } catch(err) {
        console.error(err);
    }
}

module.exports = {
    generateReadme
}