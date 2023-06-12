// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    name: 'gitHub',
    message: 'What is your GitHub username?'},
    {type: 'input',
    name: 'email',
    message: 'What is your email address?',},
    {type: 'input',
    name: 'title',
    message: 'What is your project title?',},
    {type: 'input',
    name: 'description',
    message: 'What is your project description?',},
    {type: 'list',
    name: 'license',
    messgae:'What kind of license do you require?',
    choices: ['MIT','BSD 3', 'GPL 3.0', 'APACHE 2.0', 'none'],},
    {type: 'input',
    name: 'installation',
    message: 'What command should be used to install any depencies?',
    default: 'npm i',},
    {type:'input',
    name: 'test',
    message: 'What command should I use to run test?',
    default: 'npm test',},
    {type:'input',
    name: 'usage',
    message: 'What does the user need to know about using this application?',},
    {type:'input',
    name:'contributions',
    message: 'What does the user need to know about any contributions they would like to make?',},
    
];

// TODO: Create a function to write README file
function writeToFile(md) {
    fs.writeFile('README.md',md,(err) => {
        err? console.log(err) : console.log('Successfully genereated README.md!')
    })
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('Generating the README');

        const md = generateMarkdown(response);

        writeToFile(md) ;
    });
}

// Function call to initialize app
init();
