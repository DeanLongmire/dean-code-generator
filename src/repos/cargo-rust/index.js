const path = require("path");
const { generateGitignore } = require("./generators/gen-gitignore.js");
const { generateReadme } = require("./generators/gen-readme.js");
const { generateWorkflows } = require("./generators/gen-workflows.js");
const { exec } = require('child_process');

function generateCargoRust() {
    console.log("Initializing repo...");
    try {
        const repoName = path.basename(process.cwd());
        const command = "cargo new " + repoName;

        console.log("Generating cargo project...");
        exec(command, (error, stdout, stderr) => {
            if (error) {
              console.error(`Error executing command: ${error.message}`);
              return;
            }
        });

        generateGitignore(repoName);
        generateReadme(repoName);
        generateWorkflows();
    } catch(err) {
        console.error(err);
    }
}

module.exports = {
    generateCargoRust
}