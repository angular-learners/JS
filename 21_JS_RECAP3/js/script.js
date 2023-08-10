console.log("JS RECAP3");

let employees = [
    {
        id: 1,
        firstName: "Sai",
        lastName: "Kumar",
        company: "TCS",
        Salary: 12000,
        isProjectAllocated: true
    },
    {
        id: 2,
        firstName: "Raj",
        lastName: "Kumar",
        company: "INFOSYS",
        Salary: 18000,
        isProjectAllocated: false
    },
    {
        id: 3,
        firstName: "Viart",
        lastName: "Sena",
        company: "MICROSOFT",
        Salary: 1180000,
        isProjectAllocated: true
    },
    {
        id: 4,
        firstName: "Kiran",
        lastName: "kumar",
        company: "GOOGLE",
        Salary: 5180000,
        isProjectAllocated: true
    }
];





function printEmployees() {
    for (i = 0; i < employees.length; i++) { //0 -5  //length =4
        console.log(employees[i]);
    }
}

//printEmployees();


function printOnlyProjectAllocated() {
    for (i = 0; i < employees.length; i++) {
        if (employees[i].isProjectAllocated == true) {
            console.log(employees[i]);
        }
    }
}

//printOnlyProjectAllocated();

function printGoogleEmployee() {
    for (i = 0; i < employees.length; i++) {
        if (employees[i].company == "GOOGLE") {
            console.log(employees[i]);
        }
    }
}

//printGoogleEmployee();

function printEmployeesGreaterSalary() {
    for (i = 0; i < employees.length; i++) {
        if (employees[i].Salary > 18000) {
            console.log(employees[i]);
        }
    }
}

//printEmployeesGreaterSalary();