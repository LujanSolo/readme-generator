//* FUNCTION that returns a license badge based on which license is passed in
//*   (If there is no license, return an empty string)
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  }
  if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  }
  if (license === "Mozilla Public 2.0") {
    return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
  }
  if (license === "BSD 3") {
    return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
  }
  if (license === "none") {
    return "";
  }
}

//* FUNCTION that returns the license link
//*   (If there is no license, return an empty string)
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "Mozilla Public 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "none":
      return "";
  }

  //* FUNCTION that returns the license section of README
  //*   (If there is no license, return an empty string) 
  function renderLicenseSection(license) {
    if (license !== '' || license !== null) {
      return `
  This project is covered under the ${license}.`
    } else {
      return "";
    }
  }

  //* FUNCTION to generate markdown for README
  function generateMarkdown(data) {
    return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
  
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Tests

${data.testing}

## License

${renderLicenseSection(data.license)}

## Questions

My GitHub profile: [https://github.com/${data.gitName}]

Contact me at [${data.email}] for additional inquiries.
`
  }
}

module.exports = generateMarkdown;