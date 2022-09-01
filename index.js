const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const generateSite = require('./lib/generatesite');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "./output/teammate.html");

const teamMembers = [];


//employee ques and member roles
const promptManager = () => {
  return inquirer.prompt([
      { //Name must go here
       type: 'input',
      name: 'name',
      message: 'Enter team member name (Required)',
       validate: nameInput => {
       if (nameInput) {
           return true;

            } else {
           console.log('OH NO! what happen? Try again!!! Please enter your name!');
           return false;
                      }
                  }
              },
      {   //id must go here
        type: 'input',
        name: 'employeeId',
        message: 'What is your id number? (Required)',
       validate: employeeId => {
       if (employeeId) {
           return true;

          } else {
         console.log('OH NO! what happen? Try again!!!           Please enter your employee ID!');
         return false;
                      }
                  }
              },
 { //Email must go here
      type: 'input',
      name: 'email',
      message: 'Enter team member email address (Required)',
      validate: email => {
     if (email) {
        return true;
      
      } else {
     console.log('OH NO! what happen? Try again!!! Please enter your email address!');
     return false;
                      }
                  }
              },
    {
   type: 'input',
   name: 'officeNumber',
  message: 'What is your office number? (Required)',
  validate: officeNumber => {
       if (officeNumber) {
       return true;
                     
      } else {
      console.log('OH NO! what happen? Try again!!! Please enter your office number!');
       return false;
                      }
                  }
              },
          ]).then(answers => {
              console.log(answers);
              const manager =new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
              teamMembers.push(manager);
              promptMenu();
          })
      };
      
      const promptMenu = () => {
          return inquirer.prompt([
              { // add new members
                  type: 'list',
                  name: 'menu',
                  message: 'Would you like to add more ,Please select which option you would like to continue with:',
                  choices: ['add an engineer', 'add an intern', 'finish building my team']
              }])
              .then(userChoice => {
                  switch (userChoice.menu) {
                      case "add an engineer":
                          promptEngineer();
                          break;
                      case "add an intern":
                          promptIntern();
                          break;
                      default: buildTeam();
                  }
              });
      };
      
      const promptEngineer = () => {
          console.log(`
          ===============
          Add a New Engineer
          ===============
          `);
      
          return inquirer.prompt([
              {
                  type: 'input',
                  name: 'name',
                  message: 'What is the name of engineer? (Required)',
                  validate: engineerName => {
                      if (engineerName) {
                          return true;
                      } else {
                          console.log('OH NO! what happen? Try again!!! Please enter the name of engineer!');
                          return false;
                      }
                  }
              },
              {//Manager only questions
                  type: 'input',
                  name: 'employeeId',
                  message: 'Enter your employee ID (Required)',
                  validate: employeeId => {
                      if (employeeId) {
                          return true;
                      } else {
                          console.log('OH NO! what happen? Try again!!! Please enter your employee ID!');
                          return false;
                      }
                  }
              },
              {
                  type: 'input',
                  name: 'email',
                  message: 'Enter your email address (Required)',
                  validate: email => {
                      if (email) {
                          return true;
                      } else {
                          console.log('OH NO! what happen? Try again!!! Please enter your email address!');
                          return false;
                      }
                  }
              },
              { //Engineer only questions
                  type: 'input',
                  name: 'githubUsername',
                  message: 'What is your Github username?(Required)',
                  validate: githubUsername => {
                      if (githubUsername) {
                          return true;
                      } else {
                          console.log('OH NO! what happen? Try again!!! Please enter your Github username!');
                          return false;
                      }
                  }
              }
          ]).then(answers => {
              console.log(answers);
              const engineer =new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
              teamMembers.push(engineer);
              promptMenu();
          })
      };
      
      const promptIntern = () => {
          console.log(`
          ===============
          Add a New Intern
          ===============
          `);
      
          return inquirer.prompt([
              {
                  type: 'input',
                  name: 'name',
                  message: 'What is the name of the intern? (Required)',
                  validate: internName => {
                      if (internName) {
                          return true;
                      } else {
                          console.log('OH NO! what happen? Try again!!! Please enter the name of the intern!');
                          return false;
                      }
                  }
              },
              {
                  type: 'input',
                  name: 'employeeId',
                  message: 'Enter your employee ID (Required)',
                  validate: employeeId => {
                      if (employeeId) {
                          return true;
                      } else {
                          console.log('OH NO! what happen? Try again!!! Please enter your employee ID!');
                          return false;
                      }
                  }
              },
              {
                  type: 'input',
                  name: 'email',
                  message: 'Enter your email address (Required)',
                  validate: email => {
                      if (email) {
                          return true;
                      } else {
                          console.log('OH NO! what happen? Try again!!! Please enter your email address!');
                          return false;
                      }
                  }
              },
              { //Intern only questions
                  type: 'input',
                  name: 'school',
                  message: 'What school did you go to? (Required)',
                  validate: school => {
                      if (school) {
                          return true;
                      } else {
                          console.log('OH NO! what happen? Try again!!! Please enter your school name!');
                          return false;
                      }
                  }
              }
          ]).then(answers => {
              console.log(answers);
              const intern =new Intern(answers.name, answers.employeeId, answers.email, answers.school);
              teamMembers.push(intern);
              promptMenu();
          })
      };

      const buildTeam = () => {
          console.log(`
          ===============
          Great news! The file has been succesful! Finished building my team! 
          ===============
          `);
      
          /// checking directory 
          if (!fs.existsSync(OUTPUT_DIR)) {
              fs.mkdirSync(OUTPUT_DIR)
          }
          fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
      }
      
      promptManager();







