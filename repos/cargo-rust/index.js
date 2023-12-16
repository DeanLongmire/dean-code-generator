const path = require("path");
const { generateGitignore } = require("./generators/gen-gitignore.js")
const { generateReadme } = require("./generators/gen-readme.js")

const main = () => {
    console.log("Generating files...");
    try {
        const repoName = path.basename(process.cwd());

        generateGitignore(repoName);
        generateReadme(repoName);
    } catch(err) {
        console.error(err);
    }
}

main()