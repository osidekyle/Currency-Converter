var currencies=document.getElementById("currencies");


window.addEventListener("load",loadApi);




function loadApi(){
    fetch("http://data.fixer.io/api/latest?access_key=25b5ed181f311e4488751ff1beffadac&format=1")
    .then((res)=>console.log(res))
}