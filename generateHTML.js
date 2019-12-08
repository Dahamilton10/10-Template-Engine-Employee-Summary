function htmlP1() {
return    `
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

function htmlP2(employee) {
    employee.forEach(function (e) {
        let loopHTML =
            `
        <div class="card col" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${e.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${e.getRole()}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.id}</li>
                <li class="list-group-item">${e.email}</li>
                <li class="list-group-item">${getSpecial(e)}</li>
            </ul>
        </div>
        </div>
        `
        employeeHTML = `${employeeHTML}` + `${loopHTML}`
    })
}

function htmlP3() {
return    `
    </div>
    </main>
</body>

</html>
    `
}

module.exports = {
    employeeHTML: employeeHTML,
    htmlP1: htmlP1,
    htmlP2: htmlP2,
    htmlP3: htmlP3,
}