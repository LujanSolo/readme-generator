//* Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");

//* An array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project.",
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
    choices: ["MIT", "Apache 2.0", "Mozilla Public 2.0", "BSD 3", "none"],
  },
  {
    type: "input",
    name: "gitName",
    message: "What is your GitHub address?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

//* FUNCTION to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) =>
//     (err) ? console.log("error") : console.log('READme successfully generated.'))
// }

function writeToFile(fileName, data) {
  return fs.writeFileSync(
    path.join(process.cwd(), "/dist", fileName), data, (err) =>
      (err) ? console.error(err) : console.log("File successfully created.")
  );
}

//* FUNCTION to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownOutput = generateMarkdown(answers);
      writeToFile("README.md", markdownOutput)
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

init();
