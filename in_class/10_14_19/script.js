"using strict"
let foods = ["popcorn", "cerries"];
window.onload = function () {
    let foodBtn = document.getElementById("food-btn");
    foodBtn.onclick = displayArray;
    let foodListBtn = document.getElementById("foodList-btn");
    foodListBtn.onclick = displayList;
    let randomBtm = document.getElementById("randomFood-btn");
    randomBtm.onclick = displayRandom;
}
function displayArray(){

    ulElem= document.createElement("ul");
    this.after(ulElem);

    for(let i = 0; i < foods.length;i++){
        liElem = document.createElement("li");
        this.after(liElem);
        liElem.innerHTML = foods[i];
        ulElem.append(liElem);
    }
}


function displayList(){
    let foodPs = document.getElementsByClassName("food");
    let pElem = document.createElement("p");
    this.after(pElem);
    pElem.innerHTML = ("I like ");
    for(let foodElem of foodPs){
        pElem.innerHTML += " " +foodElem.innerHTML+",";
    }
    pElem.innerHTML = pElem.innerHTML.replace(/,\s*$/, ".");


}

/*function displayList(){
    let foodPs = document.getElementsByClassName("food");
    let pElem = document.getElementsByTagName("p");
    this.after(pElem);
    pElem.innerHTML = ("I like ");
    for(let foodElem of foodPs){
        pElem.innerHTML += " " +foodElem.innerHTML+",";
    }

}*/

function displayRandom(){
    let num = Math.floor(Math.random()*10+1);
    let pElem = document.createElement("p");
    this.after(pElem);
    pElem.append(num);
}