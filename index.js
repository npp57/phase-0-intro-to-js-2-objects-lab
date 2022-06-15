// Write your solution in this file!
const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return employee = {name:"Sam", streetAddress: "11 Broadway"};
}

function beforeEachfunction() {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  };

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value ;
   return employee
} 
destructivelyUpdateEmployeeWithKeyAndValue(employee,"name", "Sam");

function deleteFromEmployeeByKey(employee, key) {
   var newEmployee = {...employee}
   delete newEmployee.name;
   return newEmployee ;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}
