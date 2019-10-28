"using strict" 
window.onload = function onLoad() {
    const btnResult = document.getElementById("btn-result");
    btnResult.onclick = lotto;
    quotes();
}



var quote = document.getElementById("quote");
var index = 0;
quoteArray = ["Two men looked out from prison bars, One saw the mud, the other saw stars.”― Dale Carnegie, How to Stop Worrying and Start Living", "I think, therefore I am. - René Descartes","There is no terror in the bang, only in the anticipation of it. - Alfred Hitchcock","If you tell the truth, you don't have to remember anything. - Mark Twain","One thing only I know, and that is that I know nothing. - Plato"];

setInterval (function quotes(){
quote.innerHTML = quoteArray[index++ % quoteArray.length];
    
},2000);
/*
if (index > quoateArray.length) - 1 index = 0;

let quote = document.getElementById("quote");
quote.innerHTML = quoteArray[index];
index++;
*/

/* 
function compareLottoNumbers(){
    let userLottoNum = getUserNumbers();
    let officialLottoNum = generateLottoNumber();
    let match = true;
    let feedbackElems = document.getElementsByClassName("feedback");
    let resultElem = document.getElementsByID "result"

    this.after(resultElem);

    for (let i = 0; i < userLottoNum.length;i++){
        if(userLottoNum[i] == officialLottoNum[i])
        feedbackElems[i].textConent = "match"
        else
        feedbackElems[i].textContent = "not a match"
        match = false;
    }

    if(match){
        resultElem.textContent = WINNER
    }
    else 
    resultElem.textContent = LOSER
    }
}

function generateLottoNumber(){
    let lottoNumbers = [];
    let comNumElem = document.getElementbyId("com-num")
    compNumElem.textContent = " ";

    for(let i =0; i < 5; i++)
    lottoNumbers[i] = math.floor((Match.random()*10)+1);
    compNumElem.textContent += lottoNumbers[i]

    return lottoNumbers

}

function getUserNumbers(){
    let lottoInputs = documents.getElementsByClassName("lotto")
    let lottoNumbers = [];

    for(let lottoInput of lottoInputs){
        lottoNumbers.push(lottoInput.value) //pushes item
    }

    return lottoNumbers;
}
*/

function lotto(){
    const entryNums = document.getElementsByClassName("lotto");
    const lottoNum = document.getElementById("result1");
    const lottoResult = document.getElementById("result2");
    const entrySpan = document.getElementsByClassName("span");

    var numArray = [5];
    for(let i = 0;i<=5;i++){
        numArray[i]= Math.floor(Math.random()*(10-1)+1);
    }
    lottoNum.innerHTML = numArray;

    for(let entryNum of entryNums){
        let i = 0;
        if(entryNum[i]===numArray[i]){
        entrySpan[i].after("match");
        }
        else{
        entrySpan[i].after("not a match");
        }
        i++;
    }
if(entryNums === numArray){
    lottoResult.innerHTML = "WOW. YOU WIN!!";
}
else
lottoResult.innerHTML = "Better luck next time";

    
}