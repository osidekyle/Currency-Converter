$(window).on("load",loadApi);
$("#calcButton").on("click",calculate);

//Function runs when page loads
function loadApi(){
  //Fades everything in
  $("#mainContainer").find("*").hide().fadeIn(750);
    //Gets API
    $.getJSON("http://data.fixer.io/api/latest?access_key=25b5ed181f311e4488751ff1beffadac&format=1")
    .then((res)=>
      Object.keys(res.rates))
    .then((res)=>{
        //Populates dropdowns with all currency symbols
        data=res;
        let output="";
        res.forEach(symbol=>
        output+=`<option value="${symbol}">${symbol}</option>`);
        $("#currenciesFrom").html(output); 
        $("#currenciesTo").html(output);   
    })
}

//Runs when calculate is clicked
function calculate(){
        //Gets rates for each currency and calculates ratio
        let convertFrom=data[$("#currenciesFrom").val()];
        let convertTo = data[$("#currenciesTo").val()];
        let conversion=convertTo/convertFrom;
        //Outputs the result into output div
        $("#output").hide().html(`<p id="res" class="mt-5">${$("#number").val()} in ${currenciesFrom.value}
                            is ${Math.round(($("#number").val()*conversion)*100)/100}
                            in ${currenciesTo.value}</p>`).fadeIn(1000);  
}
