const fs = require("fs-extra");
const ejs = require("ejs");
const argv = require("yargs-parser")(process.argv.slice(2));
const path = require("path");

const main = () => {
    console.log("Generating template...");
    try {
        const { _: leftovers, out, fn } = argv;

        const data = {
            fn,
            leftovers,
        };

        const options = {};

        if(!out || !fn) {
            console.error("--out and --fn flag required");
            process.exit(1);
        }

        const filename = path.join(__dirname, "./main.ejs");

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

main()