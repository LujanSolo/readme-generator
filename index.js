// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs"); //*read and write files to dist (fs.writeFileSync  <-- most common)

const path = require("path");
const inquirer = require("inquirer");


//*making 2 types of inquirer prompts
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe the installation process:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide any instructions on how to use your project:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How can others contribute to this project?',
  },
  {
    type: 'input',
    name: 'testing',
    message: 'How can your project be tested?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What type of License would you like to use?',
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD3", "none"], //*make this a selectable list
  },
  {
  type: 'input',
  name: 'gitUsername',
  message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];
//* must be a dynamic reaction to "none" with license, as you won't have the badge, no section on license, and no table of contents link


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), "/dist", fileName), data)
};

//*absolute path = path.resolve
//*relative path = path.join

// TODO: Create a function to initialize app
//*this is where I do my inquire prompt, pass in my questions
//* follow with .then and take back the requirer (res)ponses, as inquirer will return the res object with all of the answers inside of it
//* access each one via the name (.then response.email, etc)
//* then call writeToFile ; pass it generateMarkdown for the data
//* pass generateMarkdown(inquirerResponses)
function init() {}

// Function call to initialize app
init();
