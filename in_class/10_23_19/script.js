"using strict"

//let person = new Object();

//let person = {};

let person = {
    firstName: "Amy",
    lastName: "Smith",
    age: 20,
    hobbies: ["reading", "learning", "studying"],
    
    sayHello(){
        console.log("Hello "+ this.firstName);   
       }
}

person.sayHello(); //arrow functions have no this.

console.log(person.firstName + " " + person.lastName);

///get a key from the user and display the value

let key = "firstName";
console.log(person[key]);
console.log(person["lastName"]);

//Looop through the keys

for (keys in person - 1){ //since sayHello is inside person object
    console.log(keys + ": "+ person[keys]);
}





