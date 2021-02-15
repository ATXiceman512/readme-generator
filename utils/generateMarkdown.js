// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title 
  ${data.title}

  ## Table of Contents
- [Project Description](#Project Description)
- [Installation Instructions](#Installation Instructions)
- [Usage Information](#Usage Information)
- [Collaborators of the application](#Collaborators of the application)
- [Questions](#Questions)
- [Still Have Questions?](#Still Have Questions?)

  ## Project Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Collaborators of the application
  ${data.collaborators}

  ## Questions
  My GitHub Profile: https://github.com/${data.githubUsername}

  ### Still Have Questions?
  Please feel free to contact us: ${data.email}
`;
}

module.exports = generateMarkdown;
