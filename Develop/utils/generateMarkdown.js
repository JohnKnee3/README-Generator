// Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![test](https://img.shields.io/badge/license-MIT-blue)`;
  } else if (license === "Apache") {
    return `![test](https://img.shields.io/badge/license-Apache-green)`;
  } else if (license === "None") {
    return "";
  }
}

// Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `
  <a href= https://choosealicense.com/licenses/mit/>MIT License Link</a>`;
  } else if (license === "Apache") {
    return `
  <a href= https://choosealicense.com/licenses/apache-2.0/> Apache License Link</a>`;
  } else if (license === "None") {
    return "";
  }
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `## License 
  MIT 

  A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
  `;
  } else if (license === "Apache") {
    return `## License 
  Apache 

  A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
  `;
  } else if (license === "None") {
    return "";
  }
}

//Creates a function to add License to the table of contents
function renderLicenseTable(license) {
  console.log(license);
  if (license === "MIT" || license === "Apache") {
    return `- [License](#license)`;
  } else if (license === "None") {
    return "";
  }
}

//Creates a Markdown to be turned into the README
const generateMarkdown = (answers) => {
  console.log(answers);
  return `
  # ${answers.title}   ${renderLicenseBadge(answers.license)}
  
  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseTable(answers.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  ${answers.installation}

  ## Usage 
  ${answers.usage}

  ${renderLicenseSection(answers.license)}
  ## Contributing
  ${answers.contribution}

  ## Tests 
  ${answers.test}
  
  ## Questions
  <a href="https://github.com/${answers.github}">${
    answers.github
  }'s Amazing GitHub</a>
  
  If you want to contact me please send me an email at ${
    answers.email
  } and I will get back to you as soon as possible.
  `;
};

module.exports = { generateMarkdown };
