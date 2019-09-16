"using strict" //forces latest version of js
const userName = prompt("Enter your name");
//alert("Hi " + userName);
alert(`Hi ${userName}`);
//alert(`hello world`); lets you embed code into your string
const myP1 = document.getElementById("target")
myP1.innerHTML = `Hi ${userName}!`;
const item1Li = document.getElementById("item1");
const item2Li = document.getElementById("item2");
const item3Li = document.getElementById("item3");

item1Li.innerHTML = "Lions";
item2Li.innerHTML = "Tigers";
item3Li.innerHTML = "Bears";

const cat1 = prompt("Enter your first cat's name");
const cat2 = prompt("Enter your second cat's name");
const myP2 = document.getElementById("cat names");
myP2.innerHTML = `My cats are named ${cat1} and ${cat2}`;