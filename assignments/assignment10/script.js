"using strict" 
window.onload = function onLoad() {
    const btnResult = document.getElementById("btn-result");
    btnResult.onclick = lotto;
    quotes();
}


function quotes(){
const quote1 = document.getElementsByClassName("quotes")[0];
const quote2 = document.getElementsByClassName("quotes")[1];
const quote3 = document.getElementsByClassName("quotes")[2];
const quote4 = document.getElementsByClassName("quotes")[3];
const quote5 = document.getElementsByClassName("quotes")[4];
var quoteArray = [quote1,quote2,quote3,quote4,quote5];
    quote1.innerHTML ="Two men looked out from prison bars, One saw the mud, the other saw stars.”― Dale Carnegie, How to Stop Worrying and Start Living";
    quote2.innerHTML="I think, therefore I am. - René Descartes";
    quote3.innerHTML="There is no terror in the bang, only in the anticipation of it. - Alfred Hitchcock";
    quote4.innerHTML="If you tell the truth, you don't have to remember anything. - Mark Twain";
    quote5.innerHTML="One thing only I know, and that is that I know nothing. - Plato";
for(var i = 0; i < quoteArray.length;i++){
    quoteArray[i] = document.getElementById("quote");
}

}

function lotto(){
    const btnResult = document.getElementById("btn-result");
    const entryNums = document.getElementsByClassName("lotto");
    const lottoNum = document.getElementById("result1");
    const lottoResult = document.getElementById("result2");
    const entrySpan = document.getElementsByClassName("number");

    var numArray = [5];
    for(let i = 0;i<=5;i++){
        numArray[i]= Math.floor(Math.random()*10+1);
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