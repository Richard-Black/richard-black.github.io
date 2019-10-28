function Person(firstName,lastName){ //capitlize first letter when creating an object,
    this.firstName = firstName;
    this.lastName = lastName;

    this.sayHello = function(){
        alert("Hello "+this.firstName + " " +this.lastName);
    }

}

let fName = prompt("Enter first Name");
let lName = prompt("Enter last name");

let me2 = new Person(fName,lName);
me2.sayHello();
let me1 = new Person("Amy", "Smith");
console.log("Person is "+ me1.firstName);
me1.sayHello();
