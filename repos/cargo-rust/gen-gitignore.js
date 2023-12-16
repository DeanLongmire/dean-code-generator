const fs = require("fs-extra");
const ejs = require("ejs");
const argv = require("yargs-parser")(process.argv.slice(2));
const path = require("path");

function generateGitignore() {
    console.log("Creating .gitignore...");
    try {
        const out = ".gitignore";
        const repoName = path.basename(process.cwd());

        const data = {
            repoName
        }
        const options = {}

        const filename = path.join(__dirname, "./gitignore.ejs");
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
    generateGitignore
}