
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const { getMaxListeners } = require('process');
const { inheritInnerComments } = require('@babel/types');
const inquirer = require('inquirer');
const fs = require("fs");





//new manager prompts on startup
let newManager = [ {
    type: 'input',
    message: "What is the Team Manager's name?",
    name: 'name',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Invalid");
        }
        return true;
    }
  },
  {
    type: 'input',
    message: "What is their Employee ID?",
    name: 'id',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Invalid");
        }
        return true;
    }
  },
  {
    type: 'input',
    message: "What is their email address?",
    name: 'email',
    validate: function (answer) {
        if (answer == null || answer == 0) {
            return console.log("Invalid");
        }
        return true;
    }
  },
  {
    type: 'input',
    message: "What is their office number?",
    name: 'office',
    validate: function (answer) {
        if (answer == null || answer == 0) {
            return console.log("Invalid");
        }
        return true;
    }
  }]

let homescreen = [
    {
    type: "list",
    message: "Who would you like to add?",
    name: "choice",
    choices: [
              "Engineer",
              'Intern', 
              "I'm Finished!",
            ]
    }
  ]

//startup
let count = 0;
//array of all employees
const employeeList = [];

async function newEngineer(){
    let questions = [ {
        type: 'input',
        message: "What is the Engineers name?",
        name: 'name',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Invalid");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: "What is their Employee ID?",
        name: 'id',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Invalid");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: "What is their email address?",
        name: 'email',
        validate: function (answer) {
            if (answer == null || answer == 0) {
                return console.log("Invalid");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: "What is their gitHub?",
        name: 'gitHub',
        validate: function (answer) {
            if (answer == null || answer == 0) {
                return console.log("Invalid");
            }
            return true;
        }
      }]

    const input = await inquirer.prompt(questions);
    const professor = new Engineer(input.name,input.id,input.email,input.gitHub);
    employeeList.push(professor);
    //after pushing new employee, return to homescreen
    init();

}

async function newIntern(){

    let questions = [ {
        type: 'input',
        message: "What is the Interns name?",
        name: 'name',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Invalid");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: "What is their Employee ID?",
        name: 'id',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Invalid");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: "What is their email address?",
        name: 'email',
        validate: function (answer) {
            if (answer == null || answer == 0) {
                return console.log("Invalid");
            }
            return true;
        }
      },
      {
        type: 'input',
        message: "What school do they go to?",
        name: 'school',
        validate: function (answer) {
            if (answer == null || answer == 0) {
                return console.log("Invalid");
            }
            return true;
        }
      }]

    const input = await inquirer.prompt(questions);
    const nerd = new Intern(input.name, input.id, input.email, input.school);
    employeeList.push(nerd);
    //after pushing new employee, return to homescreen
    init();
}

function generateHTML(){

    const roles = [];
    for(let i = 0; i< employeeList.length; i++){
        roles.push(employeeList[i].constructor.name);
    }

    // for loop that generates html text based on the
    // role of the employee
    let rawHTML = ''
    for(let i = 0; i < roles.length; i ++){
        if(roles[i] == 'Manager'){
          let html = `
          <div>
            <h2>${employeeList[i].name}</h2>
            <h3>${roles[i]}</h3>
            ID: ${employeeList[i].id}<br>
            Email: <a href="${employeeList[i].email}">${employeeList[i].email}</a><br>
            Office number: ${employeeList[i].officeNumber}
           </div>`;
           rawHTML += html;
        }
        if(roles[i] == 'Engineer'){
            let html = `
            <div>
              <h2>${employeeList[i].name}</h2>
              <h3>${roles[i]}</h3>
              ID: ${employeeList[i].id}<br>
              Email: <a href="${employeeList[i].email}">${employeeList[i].email}</a><br>
              Github: <a href="https://www.github.com/${employeeList[i].gitHub}.com">${employeeList[i].gitHub}</a>
             </div>`;
             rawHTML += html;
          }
          if(roles[i] == 'Intern'){
            let html = `
            <div>
              <h2>${employeeList[i].name}</h2>
              <h3>${roles[i]}</h3>
              ID: ${employeeList[i].id}<br>
              Email: <a href="${employeeList[i].email}">${employeeList[i].email}</a><br>
              School: ${employeeList[i].school}
             </div>`;
             rawHTML += html;
          }
    }

    console.log(rawHTML);

    let topHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    </head>
    
    <h1>My Team</h1>
    <div></div>
    `;

    let bottomHTML = `
    </body>
    </html>
    `;

    //concate all three sections for output
    let finalHTML = topHTML + rawHTML + bottomHTML;

    //write file
    fs.writeFile('team-generator.html', finalHTML, (err) => {
        if (err) throw err;
        console.log('HTML file generated!');
      });
};


async function init(){

    if(count === 0){
        const prompt = await inquirer.prompt(newManager);
        const manager = new Manager(prompt.name, prompt.id, prompt.email, prompt.office);
        employeeList.push(manager);
    }
    count ++;

    const newEmployees = await inquirer.prompt(homescreen);

        switch(newEmployees.choice){
            case `Intern` : newIntern();
                break;
            case `Engineer`: newEngineer();
                break;
            case `I'm Finished!`: generateHTML();
                break; 
        }




















}

init();





