// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
//const generateMarkdown = require('./generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache2.0', 'GPL3.0', 'None'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => { error ? console.error(error) : console.log('README file has been generated!'); });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        })
        .catch((error) => {
            console.error('Error initializing app', error);
        });
}

// Function call to initialize app
init();
