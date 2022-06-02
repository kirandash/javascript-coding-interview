// Design a class for employee which takes id and name in during construction of object and has a salary property
// Design a class for manager which is employee and can have department property
class Employee {
    constructor(id, name) {
        if(!id || !name) throw new Error("ID and Name are mandatory!")
        this.id = id;
        this.name = name;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    // Get salary is not needed, can access properties directly using .salary
    getSalary(){
        return this.salary;
    }
}

class Manager extends Employee {
    setDepartment(department) {
        this.department = department;
    }
}

const employee1 = new Employee(1, "Kiran");
const manager1 = new Manager(1, "Kiran Manager");
console.log(employee1.name, manager1.name);
// const employee2 = new Employee("Maa")
employee1.setSalary("8750 SGD");
console.log(employee1.salary);
manager1.setSalary("11000 SGD");
console.log(manager1.salary);
manager1.setDepartment("FE Team");
console.log(manager1.department)
