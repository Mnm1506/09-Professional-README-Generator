// imports
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title ?:"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: "
    },
    {
        type: "input",
        name: "usage",
        message: "What is your project used for ?: "
    },
    {
        type: "input",
        name: "license",
        message: "Choose a license for this project ?: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributers of this project ?: "
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included for this project ?: "
    },
    {
        type: "input",
        name: "questions",
        message: "What to do if i have an issue ?: "
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username ?: "
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address ?: "
    },
    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./dest/README.md", data, function(err){
        if(err){
            return console.log(err);
        }
        console.log(fileName + " file Successfully created");
    });

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data))
    })

}

// function call to initialize program
init();