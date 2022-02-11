// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  console.log(data); //shows undefined want MIT
  return `
  ![test](https://img.shields.io/badge/license-MIT-blue)
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
  <a href= https://choosealicense.com/licenses/mit/>License Link</a>
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  MIT License

  A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data); //shows MIT
  return `## License 
  ${renderLicenseSection(data)}
  ${renderLicenseBadge()}
  ${renderLicenseLink()}
  `;
}

module.exports = generateMarkdown;
