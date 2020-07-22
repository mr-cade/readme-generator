const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');


const writeFileAsync = util.promisify(fs.writeFile);

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
        choices: ["Public Domain", "Apache 2.0", "Boost", "BSD-2", "BSD-3"]
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
