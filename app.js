const inquirer = require("inquirer");
const fs = require("fs-extra");
const open = require("open");

const generateHTML = ("./generateHTML")
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeRoster = []


function employeeRegistration() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the employee?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
        },
        {
            type: "list",
            message: "What is this employees job?",
            name: "role",
            choices: [
                "Intern",
                "Engineer",
                "Manager",
            ]
        },
    ]).then(function (data) {
        let employeeName = data.name;
        let employeeID = data.id;
        let employeeEmail = data.email;

        if (data.role == "Intern") {
            inquirer.prompt([{
                type: "input",
                name: "school",
                message: "What school did the intern go to?"
            },
            {
                type: "confirm",
                name: "addAnother",
                message: "Would you like to add another team member?"
            }]).then(function (data) {
                let newEmployee = new Intern(employeeName, employeeID, employeeEmail, data.school);
                employeeRoster.push(newEmployee);
                console.log("Added " + employeeName + " to the roster");
                if (data.addAnother == true) {
                    employeeRegistration();
                }
            })

        } else if (data.role == "Engineer") {
            inquirer.prompt([{
                type: "input",
                name: "github",
                message: "What is this employees Github username?"
            },
            {
                type: "confirm",
                name: "addAnother",
                message: "Would you like to add another team member?"
            }]).then(function (data) {
                let newEmployee = new Engineer(employeeName, employeeID, employeeEmail, data.github);
                employeeRoster.push(newEmployee);
                console.log("Added " + employeeName + " to the roster");
                if (data.addAnother == true) {
                    employeeRegistration();
                }
            })

        } else {
            inquirer.prompt([{
                type: "input",
                name: "officeNumber",
                message: "What is the office number of this employee?"
            },
            {
                type: "confirm",
                name: "addAnother",
                message: "Would you like to add another team member?"
            }]).then(function (data) {
                let newEmployee = new Manager(employeeName, employeeID, employeeEmail, data.officeNumber);
                employeeRoster.push(newEmployee);
                console.log("Added " + employeeName + " to the roster");
                if (data.addAnother == true) {
                    employeeRegistration();
                }
            })
        }
    })
}

function getSpecial(employee) {
    if (employee.getRole == "Intern") {
        return employee.getSchool();
    } else if (employee.getRole == "Engineer") {
        return employee.getGithub;
    } else {
        return employee.getOfficeNumber
    }
}


employeeRegistration();