const inquirer = require("inquirer");
const fs = require("fs");

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
        message: "What is the table of contents?",
        name: "contents"
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
        type: "input",
        message: "Provide license details.",
        name: "license"
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
}

// function to initialize program
function init() {
    return inquirer.prompt(questions);
    
}

// function call to initialize program
init();
