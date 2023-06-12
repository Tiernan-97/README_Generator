// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'None') {
    return `\n*[License](#license)\n`
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `## license
    
    This project is licensed under the ${license} license`
  } return '';  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## description
  
  ${data.description};

  ##Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  ${renderLicenseLink(data.license)}

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  ## installation

  ${data.installation}

  ## usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## contributing

  ${data.contributions}

  ## tests

  To run tests, enter the following:

  ${data.test}

  ## questions

  If there are any questions or issues with the repo, you can email me at:
  ${data.email}

  Find more of my work at: [${data.gitHub}](https://github.com/${data.gitHub}/).


`;
}

module.exports = generateMarkdown;
