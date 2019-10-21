"using strict"

/*function sum(a, b){
    return a + b;
    console.log(sum(5,10));
}*/

/*let sum = function(a,b){    
    return a + b;
    console.log(sum(5,10));
}*/

let sum = (a,b) => a+b; //arrow function
console.log(sum(5,10));

//create an arrow function called triple
//it will take in one parameter, and return the tripple of it
//then test it

let triple = (a) => a*3; //if only one parameter you can get rid of the paraenthesis if you'd like
console.log(triple(4));  

let other = () => 5;
console.log(other());