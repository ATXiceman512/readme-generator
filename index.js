// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a project title!');
                    return false;
                }
            }
        },
        {
            // TODO: Need to make it so the user can only selection one option
            type: 'checkbox',
            name: 'licenses',
            message: 'What license do you want to use',
            choices: [
                'Apache License 2.0',
                'BSD 3-Clause "New" or "Revised" license',
                'BSD 2-Clause "Simplified" or "FreeBSD" license',
                'GNU General Public License (GPL)',
                'GNU Library or "Lesser" General Public License (LGPL)',
                'MIT license',
                'Mozilla Public License 2.0',
                'Common Development and Distribution License',
                'Eclipse Public License version 2.0']
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project: (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your Github username? (Required)',
            validate: githubUsernameInput => {
                if (githubUsernameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project? (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need to enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use: (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to provide usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'collaborators',
            message: 'Who are the collaborators for this project? (Required)',
            validate: collaboratorsInput => {
                if (collaboratorsInput) {
                    return true;
                } else {
                    console.log('You need to information on the collaborators');
                    return false;
                }
            }
        }
    ]);
};

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + "-README.md", generateMarkdown(data), err => {
        if (err) throw new Error(err);
        console.log('New readme file created');
    })
}

// Function to initialize app
function init() {
    promptUser()
        .then(projectData => {
            writeToFile(projectData.title, projectData);
        });
}

// Function call to initialize app
init();
