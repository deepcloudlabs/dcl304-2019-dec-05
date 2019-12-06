class Employee {
    constructor(identity, fullname, iban, salary) {
        this.identity = identity;
        this.fullname = fullname;
        this.iban = iban;
        this.salary = salary;
        // this.sayHello = this.sayHello.bind(this);
        // this.sayHello = function() { console.log("Hello, " + this.fullname + "!"); }
        this.sayHello = () => console.log("Hello, " + this.fullname + "!");
    }

}

let jack = new Employee("12345678910","Jack Bauer","TR1",100000);
window.fullname= "Kate Austen";
window.setTimeout(jack.sayHello, 3000);

