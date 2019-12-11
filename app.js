const inquirer = require("inquirer");
const fs = require("fs-extra");
const open = require("open");

const generateHTML = ("./generateHTML")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeeRoster = []
let teamHTML = ""


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
                } else {
                    writeToFile(page);
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
                } else {
                    writeToFile(page);
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
                console.log(employeeRoster);
                console.log(JSON.stringify(employeeRoster));
                console.log("Added " + employeeName + " to the roster");
                if (data.addAnother == true) {
                    employeeRegistration();
                } else {
                    writeToFile(page);
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

function writeToFile(data) {
    fs.writeFile("team.html", data, function (err, data) {
        if (err) console.log('error', err);
    });
}










const generatePage = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employee Roster</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <style>
            body {
                background-color: white;
                -webkit-print-color-adjust: exact !important;
                font-family: 'Cabin', sans-serif;
            }
    
            main {
                background-color: white;
                height: auto;
                padding-right: 5%;
                padding-left: 5%;
                flex-wrap: auto;
            }
    
            .col {
                flex: 1;
                text-align: center;
            }
        </style>
    </head>
    
    <body>
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand">Employee Roster</a>
            </nav>
        </div>
        <main>
            <div class="row col">
            </div>
        </main>




        <script type="text/javescript">
            let employeeRoster = ${JSON.stringify(employeeRoster)};
    
    
    
        </script>


    </body>
    
    </html>
`
}



const htmlP1 = () => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Roster</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <style>
        body {
            background-color: white;
            -webkit-print-color-adjust: exact !important;
            font-family: 'Cabin', sans-serif;
        }

        main {
            background-color: white;
            height: auto;
            padding-right: 5%;
            padding-left: 5%;
            flex-wrap: auto;
        }

        .col {
            flex: 1;
            text-align: center;
        }
    </style>
</head>

<body>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand">Employee Roster</a>
        </nav>
    </div>
    <main>
        <div class="row col">
`
}

let employeeHTML = "";

const htmlP2 = (employeeRoster) => {
    employeeRoster.forEach(function (e) {
        let loopHTML =
            `
        <div class="card col" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${e.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${e.getRole(e)}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.id}</li>
                <li class="list-group-item">${e.email}</li>
                <li class="list-group-item">${e.getRole(e)}</li>
            </ul>
        </div>
        </div>
        `;
        employeeHTML += employeeHTML + loopHTML;
    })
    console.log("ok" + employeeHTML);
}

const htmlP3 = () => {
    return `
    </div>
    </main>
</body>

</html>
    `
}






const page = generatePage();
employeeRegistration();