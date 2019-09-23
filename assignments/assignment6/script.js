"using strict" 
const firstName = prompt("Enter your first name");
const getFirstName = document.getElementById("fname").textContent;
const resultFirstName = document.getElementById("fname");
resultFirstName.textContent = `First Name: ${firstName}`;
const lastName = prompt("Enter your last name");
const getLastName = document.getElementById("lname").textContent;
const resultLastName = document.getElementById("lname");
resultLastName.textContent = `Last Name: ${lastName}`;
const productName = document.getElementById("product").textContent;
const resultProductName = document.getElementById("product");
resultProductName.textContent = `Product Name: Beach Balls`;
const order = prompt("How many beach balls would you like to purchase?");
const getOrder = document.getElementById("count").textContent;
const resultOrder = document.getElementById("count");
resultOrder.textContent = `Product Count: ${order}`;
const productPrice = document.getElementById("price").textContent;
const resultProductPrice = document.getElementById("price");
resultProductPrice.textContent = `Product Price: $3.47`;
const tax = document.getElementById("tax").textContent;
const resultTax = document.getElementById("tax");
resultTax.textContent = `Tax: 0.07`;
if (order > 1) {

    const orderSummary = document.getElementById("summary").textContent;
    const resultOrderSummary = document.getElementById("summary");
    resultOrderSummary.textContent = `${firstName} ${lastName} ordered ${order} Beach balls`;
}
else {

    const orderSummary = document.getElementById("summary").textContent;
    const resultOrderSummary = document.getElementById("summary");
    resultOrderSummary.textContent = `${firstName} ${lastName} order a Beach ball`;
}

function add(order) {
    return ((((order * 3.47) * 1.07)*100)/100).toFixed(2);
}
var orderTotal = add(order);
const resultOrderTotal = document.getElementById("total");
resultOrderTotal.textContent = `Totalling: ${orderTotal}`;