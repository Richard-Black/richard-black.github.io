"using strict"

window.onload = function(){
    //const table = document.getElementById("animal-table").onclick = this.highLightCell;
    //this.document.getElementById("animal-table").onmouseover = highLightCell;
    //this.document.getElementById("animal-table").onmouseout = unHighLightCell;
    this.document.getElementById("animal-table").addEventListener("mouseover",highLightCell);
    this.document.getElementById("animal-table").addEventListener("mouseout",unHighLightCell); //add event listener allows you to add multiple functions to an element
    this.document.getElementById("show-btn").addEventListener("click", showAnimals);
    this.document.getElementById("style-btn").addEventListener("click", styleParagraph);
    this.setInterval(this.styleParagraph,1000);

}

function highLightCell(event){
    if(!isTD(event))return;
    //console.log(callerName);    
    //highlight cell
    event.target.classList.add("highlight"); 
}

function unHighLightCell(event){
    if(!isTD(event))return;    
    //highlight cell
    event.target.classList.remove("highlight"); //.add to add it permanently, .toggle so it can take away highlight or add .remove
}

function isTD(event){
    //if(callerName.toLowerCase()!='td') return false; //for anything other than a table cell get out
    return(event.target.tagName.toLowerCase()==='td');
}

function showAnimals(){
    let animalTDs = document.querySelectorAll("#animal-table td"); //querySelector uses CSS syntax a . or # is needed
    let p = document.createElement("p");
    this.after(p);
    
    for (let animalTD of animalTDs){
        p.innerHTML += animalTD.innerHTML + ", "
    }
}

function styleParagraph(){
    let p = document.querySelector(".special");
    //let p = document.getElementsByClassName("special")[0];
    p.classList.toggle("highlight");
}