const fs = require("fs-extra")
const ejs = require("ejs")
const argv = require("yargs-parser")(process.argv.slice(2))

const main = () => {
    try {
        console.log(argv)
    } catch(err) {
        console.error(err)
    }
}

main()