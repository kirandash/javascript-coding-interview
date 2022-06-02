// Design the same classes by using only Javascript prototypes
var Employee = function(id, name) {
    if(!id || !name) {
        throw new Error("ID and Name are mandatory!")
    }
    this.id = id;
    this.name = name;
}

Employee.prototype.setSalary = function(salary) {
    this.salary = salary;
}

Employee.prototype.getSalary = function() {
    return this.salary;
}

const employee1 = new Employee(1, "Kiran");
console.log(employee1.name);
employee1.setSalary("8750 SGD")

var Manager = function(params) {
    // Important
    Employee.apply(this, arguments);
}

// Clone prototype
Manager.prototype = Object.create(Employee.prototype);
// After cloning point constructor back to Manager instead of Employee
Manager.prototype.constructor = Manager;

Manager.prototype.setDepartment = function(department) {
    this.department = department;
}

const manager = new Manager(1, "Kiran Manager");
manager.setSalary("11000 SGD");
manager.setDepartment("FE Team")
console.log(manager.name, manager.salary, manager.department)
