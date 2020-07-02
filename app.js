$(window).on("load",loadApi);
$("#calcButton").on("click",calculate);


function loadApi(){
  $("#mainContainer").find("*").hide().fadeIn(750);
    $.getJSON("http://data.fixer.io/api/latest?access_key=25b5ed181f311e4488751ff1beffadac&format=1")
    .then((res)=>
      Object.keys(res.rates))
    .then((res)=>{
        data=res;
        let output="";
        res.forEach(symbol=>
        output+=`<option value="${symbol}">${symbol}</option>`);
        $("#currenciesFrom").html(output); 
        $("#currenciesTo").html(output);   
    })
}

function calculate(){
        let convertFrom=data[$("#currenciesFrom").val()];
        let convertTo = data[$("#currenciesTo").val()];
        let conversion=convertTo/convertFrom;
        $("#output").hide().html(`<p id="res" class="mt-5">${$("#number").val()} in ${currenciesFrom.value}
                            is ${Math.round(($("#number").val()*conversion)*100)/100}
                            in ${currenciesTo.value}</p>`).fadeIn(1000);  
}
