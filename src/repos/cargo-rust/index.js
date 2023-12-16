const path = require("path");
const { generateGitignore } = require("./generators/gen-gitignore.js")
const { generateReadme } = require("./generators/gen-readme.js")
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

            if (stderr) {
                console.error(`Command stderr: ${stderr}`);
                return;
            }
            
              console.log(`Command output: ${stdout}`);
        });

        generateGitignore(repoName);
        generateReadme(repoName);
    } catch(err) {
        console.error(err);
    }
}

module.exports = {
    generateCargoRust
}