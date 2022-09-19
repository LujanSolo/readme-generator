// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

//*making 2 types of inquirer prompts
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "input",
    name: "contribution",
    message: "How can others contribute to this project?",
  },
  {
    type: "input",
    name: "testing",
    message:
      "If you have written tests for your app, provide examples on how to run them:",
  },
  {
    type: "list",
    name: "license",
    message: "What type of License would you like to use?",
    choices: ["MIT", "Apache 2.0", "Mozilla Public 2.0", "BSD 3", "none"], //*make this a selectable list
  },
  {
    type: "input",
    name: "gitName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?", //*these last 2 added to QUESTIONS section of readme
  },
];
//* must be a dynamic reaction to "none" with license, as there won't be a badge, no section on license, and no table of contents link (bonus?)

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) =>
//   (err) ? console.log("error") : console.log('READme successfully generated.'))
// }
function writeToFile(fileName, data) {
  return fs.writeFileSync(
    path.join(process.cwd(), "/dist", fileName),
    data,
    (err) =>
      err ? console.error(err) : console.log("File successfully created.")
  );
}



//* FUNCTION to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownOutput = generateMarkdown(answers);
      writeToFile('README.md', markdownOutput)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log('An error occurred.');
      } else {
        // Something else went wrong
        console.log('An error occurred.');
      }
    });
}

// Function call to initialize app
init();
