const body = document.querySelector("body");

body.innerHTML="";

let random =0;

body.innerHTML += `<h1>Random Number Game</h1>`;

body.innerHTML += `<h3>Generate a number between 0 and <input id="rangeNum" type="number" max="40"></h3>`;

const rangeNum = document.getElementById("rangeNum");

body.innerHTML += `<h4>Guess the number: <input id="choseNum" type="number" max="40"> <button id="printButton">Play!</button></h4>`;

body.innerHTML += `<h4 id="result">You chose: `;

const choseNum = document.getElementById("choseNum");
const result = document.getElementById("result");
const printButton = document.getElementById("printButton");

printButton.addEventListener("click", function() {
    result.innerHTML ="";
    random = Math.floor(Math.random()*41);
    result.innerHTML += "You chose:" + choseNum.value+", the machine chose: "+random;
    if(choseNum.value<random){
        body.innerHTML += `<h4>You lost!</h4>`
    }else  if(choseNum.value>random){
        body.innerHTML += `<h4>You win!</h4>`
    }else{
        body.innerHTML += `<h4>Draw!</h4>`
    }
});


