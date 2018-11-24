var workers = [];


function addWorker() {

    var firstName = document.getElementById('firstName').value;
    var surname = document.getElementById('surname').value;
    var sNumberOfWorkingYears = document.getElementById('wyears').value


    if (!isValid(firstName, surname, sNumberOfWorkingYears)) {
        alert(`Worker ${firstName} ${surname} is not added, your input is wrong.`)
        return;
    }
    var fullName = surname + ' ' + firstName;
    var numberOfWorkingYears = parseInt(document.getElementById('wyears').value);
    var education = document.getElementById('education').value;
    var salary = countSalary(numberOfWorkingYears, education);
    workers.push({ name: fullName, numberOfWorkingYears: numberOfWorkingYears, education: education, salary: salary });

    alert(`Worker ${firstName} ${surname} is added`);
}

function countSalary(numberOfWorkingYears, education) {
    var baseSalary = 500;
    var raise = baseSalary * 0.1 * numberOfWorkingYears;
    var mainSalary = baseSalary + raise;
    var coeficient = educationCoeficient(education);
    return mainSalary * coeficient;

}

function educationCoeficient(education) {
    switch (education) {
        case 'faculty': return 1.2;
        case 'college': return 1.1;
        default: return 1;
    }
}

function isValid(firName, sname, wYears) {
    if (firName.length == 0 || sname.length == 0 || wYears.length == 0) {
        return false;
    }
    var n = parseInt(wYears);
    if (isNaN(n) || n < 0) {
        return false;
    }
    return true;
}

function showWorkers() {
    var tableHtml = '<table class = "table-striped" border = "1"><tr><th>Name</th><th>Salary</th></tr>';
    workers.sort(function (w1, w2) { return w2.salary - w1.salary });
    for (var i = 0; i < workers.length; i++) {
        tableHtml += '<tr><td>' + workers[i].name + '</td>'
            + '<td>' + workers[i].salary.toFixed(2) + '</td></tr>';
    }
    tableHtml += '</table>';
    document.getElementById('workers').innerHTML = tableHtml;
}