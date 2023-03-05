// const userName = 'Max';

// let age = 30;

// age = 29;

// let result;

// function add(a: number, b: number) {
    
//     result = a + b;
//     return result;
//     }

// if (age > 20) {
//     let isOld = true;
// }
    
// console.log(isOld);
    
//     console.log(result);

//arrow function below  - const add = () => {};

// const add = (a: number, b: number) => {
//     return a + b;
// };

//const add = (a: number, b: number = 1) => a + b;

//console.log(add(2, 5));

// const printOutput: (a: number | string) => void = output => console.log(output); 

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }
   
// printOutput(add(5));

//arrays are objects!

// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking', ...hobbies]; //spread operator

//activeHobbies.push(hobbies[0], hobbies[1]); old way

//activeHobbies.push(...hobbies);

//onsole.log(activeHobbies);

// const person = {
//     firstName: 'Max',
//     age: 30
// };

// const copiedPerson = {...person};

//console.log(copiedPerson);

// const add = (...numbers: number[]) => {
//     return numbers.reduce((curResult, curValue) => {
//         return curResult + curValue;
//     }, 0);

// };

// const addedNumbers = add(5, 10, 2, 3.7);
// console.log(addedNumbers);

//const hobby1 = hobbies[0]; //old way
//const hobby2 = hobbies[1]; //old way

//destructuring arrays means you pull out elements out of array 

// const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// console.log(hobbies, hobby1, hobby2);

// const { firstName: userName, age } = person; 

// console.log(userName, age, person);

abstract class Department {
    
    static fiscalYear = 2020; 
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        //console.log(Department.fiscalYear); //console.log(this.fiscalYear); wont work
    }
    
    static createEmployee(name: string) {
         return {name: name};
    }



    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
        printEmployeeInformation() {
           console.log(this.employees.length);
              console.log(this.employees);
        }
    }

    class ITDepartment extends Department  {
        
        admins: string[];
        
        constructor(id: string, admins: string[]) {
            super(id, 'IT');
            this.admins = admins;
        }

        describe() {
        console.log('IT Department - ID: ' + this.id);
        }
    }

    class AccountingDepartment extends Department {
        
        private lastReport: string;  //property of type string
        private static instance: AccountingDepartment; 
        get mostRecentReport() { //getter method has to return something
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        }

        set mostRecentReport(value: string) {
            if (!value) {
                throw new Error('Please pass in a valid value!');
            }
            this.addReport(value);
        }


        private constructor(id: string, private reports: string[]) {
            super(id, 'Accounting');
            this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;

    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

//accounting.employees[2] = 'Anna';//bad practice especially on large projects/wont work if class is private

//console.log(accounting);
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

//const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance(); //<-- replaces code above due to using private constructor
const accounting2 = AccountingDepartment.getInstance(); //<-- replaces code above due to using private constructor
console.log(accounting, accounting2);

//console.log(accounting.mostRecentReport); //access this as a property not a method


accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport); //access this as a property not a method


accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();


//console.log(accounting);

//const accountingCopy = { name: 's', describe: accounting.describe };

//accountingCopy.describe();