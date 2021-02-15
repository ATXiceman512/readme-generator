// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project: (Required)',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + "-README.md", generateMarkdown(data), err => {
        if (err) throw new Error(err);
        console.log('New readme file created');
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(projectData => {
            writeToFile(projectData.title, projectData);
        });
}

// Function call to initialize app
init();
