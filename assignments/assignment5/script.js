"using strict" 
var userName = prompt("Enter your name");
var myP1 = document.getElementById("name");
myP1.innerHTML = `${userName} ordered`;
var order = prompt("How many coffees would you like to order?");
var myP2 = document.getElementById("order");
if (order > 1) {
    myP2.innerHTML = ` ${order} coffees,`;
}
else {
    myP2.innerHTML = ` ${order} coffee,`;
}
var tip = prompt("How much would you like to tip?");

function add(order,tip) {
    return (((((order * 2.50) * 1.07)+(tip*1.00))*100)/100).toFixed(2);
}
var total = add(order,tip);
var myP4 = document.getElementById("total");
myP4.innerHTML = `Total: $${total} `;