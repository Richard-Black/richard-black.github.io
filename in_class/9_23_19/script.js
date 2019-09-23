"using strict"

//once all html and CSS has loaded to the page
// function () = anonymous function


function display() {
    let resultElem = document.getElementById("result");
    let inputPresent = document.getElementById("present").value;
    inputPresent = inputPresent.toLowerCase().trim();
    console.log("showing my gift");
    if (inputPresent ===   `doll`) { //===stritcer to make them not the same type
        resultElem.innerHTML = `<strong>Nope I'm broke! Sorry, no doll for Christmas this year</strong>`;
    }
    else if (inputPresent === `plane`) {
        resultElem.innerHTML = `<strong>Nope I'm broke! Sorry, no plane for Christmas this year</strong>`;

    }
    else if (inputPresent === `car`) {
        resultElem.innerHTML = `<strong>Nope I'm broke! Sorry, no car for Christmas this year.</strong>`;

    }


    switch (present) {
        case "doll":
            resultElem.innerHTML = + "I love dolls";
            break;
        case "car":
            resultElem += "I love cars"
            break;
        default:
            resultElem.innerHTML += "I<strong>don't</strong> love this";
            break;
    }

}
window.onload = function onLoad() {
    //alert("Now See Me");
    console.log("hello");
    const getBtnDisplay = document.getElementById("btn-display");
    const btnResult = document.getElementById("btn-display");
    btnResult.onclick = display; //executes right away with paraenthesis around function
}

//innerHTML enters as HTML text and can be edited, textcontent enters as uneditable text

