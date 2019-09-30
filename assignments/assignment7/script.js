"using strict" 

function displayAge() {
    let age1 = document.getElementById("age1").value;
    let age2 = document.getElementById("age2").value;
    let age3 = document.getElementById("age3").value;
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let name3 = document.getElementById("name3").value;
    let result1 = document.getElementById("result1");
    if (age1 >= age2 && age1 >= age3 && age2 >= age3) { 
        result1.innerHTML = `Oldest to youngest: ${name1}, ${name2}, ${name3}`;
    }

    else if (age2 >= age1 && age2 >= age3 && age1 >= age3) {
       result1.innerHTML = `Oldest to youngest: ${name2}, ${name1}, ${name3}`;

    }
    else if (age3 >= age1 && age3 >= age2 && age1 >= age2) {
        result1.innerHTML = `Oldest to youngest: ${name3}, ${name1}, ${name2}`;
    }

    else if (age1 >= age2 && age1 >= age3 && age3 >= age2) {
        result1.innerHTML = `Oldest to youngest: ${name1}, ${name3}, ${name2}`;
    }

    else if (age2 >= age1 && age2 >= age3 && age3 >= age1) {
        result1.innerHTML = `Oldest to youngest: ${name2}, ${name3}, ${name1}`;

    }

    else if (age3 >= age1 && age3 >= age2 && age2 >= age1) {
        result1.innerHTML = `Oldest to youngest: ${name3}, ${name2}, ${name1}`;
    }

}

function displayLanguage() {
    let language = document.getElementById("language").value;
    let result2 = document.getElementById("result2");
    language = language.toLowerCase().trim();

    if (language === `english`) {
       result2.innerHTML = `Hello World`;

    }
    else if (language === `spanish`) {
        result2.innerHTML = `Hola Mundo`;

    }
    else if (language === `french`) {
        result2.innerHTML = `Bonjour le monde`;

    }
    else if (language === `chinese`) {
        result2.innerHTML = `你好，世界`;

    }
    else {
        result2.innerHTML = `Please enter language as English, Spanish, French, or Chinese`;

    }

}

function displayPlural() {
    let itemNumber = document.getElementById("numOfItem").value;
    let itemName = document.getElementById("itemName").value;
    let result3 = document.getElementById("result3");

    if (itemNumber > 1) {
        result3.innerHTML = `You ordered ${itemNumber} ${itemName}s`;
    }

    else if (itemNumber == 1) {
        result3.innerHTML = `You ordered a ${itemName}`;

    }

    else if (itemNumber < 0) {
        result3.innerHTML = `Error. Negative Number entered`
    }

}

window.onload = function onLoad() {
    const btnAges = document.getElementById("btn-ages");
    const btnHello = document.getElementById("btn-hello");
    const btnPlural = document.getElementById("btn-plural");
    btnAges.onclick = displayAge;
    btnHello.onclick = displayLanguage;
    btnPlural.onclick = displayPlural;

}


