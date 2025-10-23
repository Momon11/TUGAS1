class Employee{
    constructor(name) {
        this.baseFullTimeEmployee = 5000000;
        this.basePartTimeEmployee = 50000;
    }

    calculateSalary(){

    }
}

class FullTimeEmployee extends Employee{
    calculateSalary(){
            return console.log(` Gaji anda adalah ${this.baseFullTimeEmployee}`);
    }
}

class PartTimeEmployee extends Employe{
    calculateSalary(){
            return console.log();
    }
}