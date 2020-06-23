var currenciesFrom=document.getElementById("currenciesFrom");
var currenciesTo=document.getElementById("currenciesTo");
var calcButton = document.getElementById("calcButton");
var output = document.getElementById("output");
var number = document.getElementById("number");

window.addEventListener("load",loadApi);
calcButton.addEventListener("click",calculate);



function loadApi(){
    fetch("http://data.fixer.io/api/latest?access_key=25b5ed181f311e4488751ff1beffadac&format=1")
    .then((res)=>res.json())
    .then((res)=>
      Object.keys(res.rates))
    .then((res)=>{
        let output="";
        res.forEach(symbol=>
        output+=`<option value="${symbol}">${symbol}</option>`)
        currenciesFrom.innerHTML=output; 
        currenciesTo.innerHTML=output; 
    })
}








function calculate(){
    fetch("http://data.fixer.io/api/latest?access_key=25b5ed181f311e4488751ff1beffadac&format=1")
    .then((res)=>res.json())
    .then((res)=>res.rates)
    .then((res)=>{
        let convertFrom=res[currenciesFrom.value];
        let convertTo = res[currenciesTo.value];
        let conversion=convertTo/convertFrom;
        output.innerHTML = `<h3>${number.value} in ${currenciesFrom.value}
                            is ${Math.round((number.value*conversion)*100)/100}
                            in ${currenciesTo.value}`
    })
}