//Loop from 1 to 10 and display the numbers in the console
function displayCountLoop(){

    let count = 1;

    while (count <= 10) {
        console.log(`${count}`);
        count++;
    }
}

//Loop from 1 to 10 and display in an unordered list
function displayCountLoopList(){

    ulElem = document.createElement("ul");
    contentElem = document.getElementById("content");
    contentElem.append(ulElem);

    let count = 1;

    while (count <= 10) {
        //create list element
        liElem = document.createElement("li");
        liElem.innerHTML = count;
        //append list element to ul element
        ulElem.append(liElem);
        console.log(`${count}`);
        count++
    }
}

//For Loop 
function displayLinks() {
    let linksElem = document.getElementById("links");
    for (let i = 1; i <= 5; i++) {
        aElem = document.createElement("a");
        linksElem.append(aElem);
        aElem.innerHTML = `Page${i}`;
        aElem.href = `#${i}`;
    }
}

function displayTimesTables() {
    //insert table after button
    let tableElem = document.createElement("table");
    //tableElem.classList(table); Add an element so it can be edited on CSS
    //tableElem.id = "table";
    this.after(tableElem);  //puts after element

    //loop through and create rows

    for (let row = 1; row <= 10; row++) {
        let tableRow = document.createElement("tr");
        tableElem.append(tableRow);
        
        //loop through and create columns
        for (let col = 1; col <= 10; col++) {
            let tableCol = document.createElement("td");
            tableElem.append(tableCol);
            tableCol.innerHTML = row * col;
        }

    }

 }

window.onload = function () {
    this.displayCountLoop();
    this.displayCountLoopList();
    displayLinks();

    let multBtn = document.getElementById("mult-btn");
    multBtn.onclick = displayTimesTables;
}

