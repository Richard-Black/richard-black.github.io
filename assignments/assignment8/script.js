"using strict" 

function sumEven() {
    let number = document.getElementById("number").value;
    let result2 = document.getElementById("result2");
    let sum = 0;
    for (i = 0; i <= number;i++ ) {
        if (i % 2 == 0) {
            sum = i + sum;
        }
    }
    result2.innerHTML = `Sum: ${sum}`;
}

function findAscii() {
    let word = document.getElementById("word").value;
    let result1 = document.getElementById("result1");
    var totalAscii =""; 
    for ( i = 0; i < word.length; i++) {
        totalAscii += word.charCodeAt(i) + `, `;

    }
            totalAscii = totalAscii.replace(/,\s*$/, "");

            result1.innerHTML = `${totalAscii}`;

}

window.onload = function onLoad() {
    const btnNum = document.getElementById("btn-num");
    const btnWord = document.getElementById("btn-word");
    btnNum.onclick = sumEven;
    btnWord.onclick = findAscii;
}