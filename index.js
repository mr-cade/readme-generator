// npm require statements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// pulls generate markdown function from generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');
// creates async file writing
const writeFileAsync = util.promisify(fs.writeFile);

const licenseOptions = [
    {
        name:"Apache 2.0",
        value:"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    },
    {
        name:"Boost",
        value:"[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    },
    {
        name:"BSD 2",
        value:"[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    },
    {
        name:"BSD 3",
        value:"[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    },
    {
        name:"MIT",
        value:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    },
    {
        name:"Mozilla Public License 2.0",
        value:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
 ]
// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "Provide installation instructions.",
        name: "install"
    },
    {
        type: "input",
        message: "Provide usage instructions.",
        name: "usage"
    },
    {
        type: "list",
        message: "Provide license details.",
        name: "license",
        choices: licenseOptions
    },
    {
        type: "input",
        message: "Provide contribution details.",
        name: "contributing"
    },
    {
        type: "input",
        message: "Provide testing details",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data)
}

// function to initialize program
function init() {
    return inquirer.prompt(questions);
}

// function call to initialize program
init()
    .then(function(answers){
        console.log(answers);
        const md = generateMarkdown(answers)
        writeToFile("generatedREADME.md", md)
    })
    .catch(function(err) {
        console.log(err);
    });
