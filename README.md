# 09 Node.js Challenge: Professional README Generator

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Methodology

I started this project by first creating the questions which I would use to generate answers to insert into the README generator. Then I created the function to write the file. After this I created the initialisation function which would be called upon starting the app.
After this I started working on the generateMarkdown.js file. The render license link and render License section functions were easy enought to code, but the badge proved some difficulty. However, it was done. From there I started to type up the README template and used template literals to dynamically add the information from the inquirer prompt into the template. 

## Video Link

https://www.loom.com/share/52a93e9709b24c46adba9e530e0d454a




