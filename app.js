var currenciesFrom=document.getElementById("currenciesFrom");
var currenciesTo=document.getElementById("currenciesTo");


window.addEventListener("load",loadApi());




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