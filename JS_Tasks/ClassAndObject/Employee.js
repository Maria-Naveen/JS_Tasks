class Employee{
    constructor(name,email,age,department,position,salary){
        this.name = name
        this.email = email
        this.age = age
        this.department = department
        this.position = position
        this.salary = salary
    }
    introduce(){
        console.log(`Welcome ${this.name},${this.position}!`)
    }
    displaySalary(){
        console.log(`Salary:$${this.salary}`)
    }
}

const newEmployee = new Employee('Ram','ram@email.com',35,'S&H','HR',75000)
console.log(newEmployee)
const manager = new Employee('Sam','sam@gmali.com',39,'S&H','Manager',100000)
console.log(manager)
newEmployee.introduce()
manager.displaySalary()