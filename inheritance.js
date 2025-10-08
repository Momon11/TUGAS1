//parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    getinformation() {
        console.log(`This person is ${this.name}`);
    }
}

//child class
class Professor extends Person {
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceself() {
        console.log(
            `My Name is ${this.name}, and i will be your ${this.teaches} professor`
        );
    }
}

const ema = new Professor("Usman", "Math");
console.log(ema.getinformation());
console.log(ema.introduceself());
