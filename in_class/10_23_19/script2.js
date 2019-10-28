//loop through and all the items to get the total
let menuItem1 = {
    Cheese: 3,
    Banana: 2,
    OJ: 5,
}

total = 0;

for(let item in menuItem1){ //only use of in the DOM, must use in
    total += menuItem1[item];
}

console.log("Total is "+ total);

//double all the items, then add them to total
let menuItem2 = {
    Cheese: 3,
    Banana: 2,
    OJ: 5,
}

total = 0;

for(let item in menuItem2){ 
    total += menuItem2[item]*2;
}

console.log("Total is "+ total);