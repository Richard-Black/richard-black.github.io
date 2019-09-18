"using strict"
//console.log("Hello world");
//const myName = "Richard";
//myName = "Lucas";
//console.log(`Hello world ${myName}`);

//gather fruit names
const fruit1 = document.getElementById("fruit1").textContent;
const fruit1 = document.getElementById("fruit2").textContent;
const fruit1 = document.getElementById("fruit3").textContent;

//write to reuslt paragraph
const resultElem = document.getElementById("result");
resultElem.textContent = `You like ${fruit1}, ${fruit2}, ${fruit3}`;


//console.log(`first fruit ${fruit1}`);
//fruit1.innerHTML = "What a good day!";

function displayFruits() {
    //gather fruit names
    const fruit1 = document.getElementById("fruit1").textContent;
    const fruit1 = document.getElementById("fruit2").textContent;
    const fruit1 = document.getElementById("fruit3").textContent;

    //write to reuslt paragraph
    const resultElem = document.getElementById("result");
    resultElem.textContent = `You like ${fruit1}, ${fruit2}, ${fruit3}`;
}
//get the button
const btnResult = document.getElementById("btn-results");
btnResult.onclick = displayFruits;