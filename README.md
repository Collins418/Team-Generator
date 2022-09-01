
# Team Generator

## Description
Your challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Because testing is key to making code maintainable, you’ll also write unit tests for each part of your code and ensure that it passes all of them.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video and add it to the README of your project.by 

## Table of Contents

Please use the links in the table below to navigate the ReadMe contents.

- [Team Generator](#team-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
      - [Installation](#installation)
      - [Dependencies](#dependencies)
    - [Testing](#testing)
    - [Output](#output)


## User Story

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

* Demo of the application Video and deploy link
[https://watch.screencastify.com/v/eq4L4r1NSOF23XzlZRrG]
[ https://collins418.github.io/Team-Generator/]


#### Installation 

- **Node.js** - Make sure Node.js is installed in your machine. Need help with installing Node.js on your machine, [click here](https://nodejs.org/en/) to download the application.


#### Dependencies
- **Jest** - The [jest](https://jestjs.io/) is the Js testing framework that is used for unit testing in this project.
- 
- **NPM Inquirer Package** - The [NPM inquirer package](https://www.npmjs.com/package/inquirer) is needed.

both these packages are already listed as dependencies in the `package.json` file, so you will only need to run the `npm install` command in your terminal to access them.

 follow this workflow:
1. Make sure to install the JSON packages by typing `npm install` in the terminal.
2. Run tests with `npm run test` in the terminal
3. Create or update classes to pass a single test case

### Testing

To run test a test simply run `npm run test` to run all suites or  `npm run watch` to continue to watch or run a specific suite.




### Output

The project generates a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member displays the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)
  * 
![team generate](https://user-images.githubusercontent.com/106499144/187825115-35c25f4c-56fa-43db-acf2-cebd2019b636.jpg)
