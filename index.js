// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs"); //*read and write files to dist (fs.writeFileSync  <-- most common)

const path = require("path")
const inquirer = require("inquirer") //* user-interface, effectively


//*making 2 types of inquirer prompts
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What type of License would you like to use?',
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD3", "none"],
  }
];
//todo must be a dynamic reaction to "none" with license, as you won't have the badge, no section on license, and no table of contents link 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
