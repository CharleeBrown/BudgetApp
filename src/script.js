"use strict";
let total = document.getElementById("total");
let rate = document.getElementById("rate");
let hours = document.getElementById("hours");
let mainBill = document.getElementById("billTotal");
let netVal = document.getElementById("net");

mainBill.value = 0.00;

function getBills(){

    let bills = document.querySelectorAll("#bill");

for(var i =0; i < bills.count; i++){
    if(bills.value != null)
        mainBill.value += bills.value;
    }
}
   // document.querySelectorAll("#bill").forEach(el=>mainBill.value+=+el.value);

   let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  netVal.value == 0;
function totalRate(){
    
    total.value = formatter.format(parseFloat(rate.value * hours.value));
    netVal.value = formatter.format(parseFloat(total.value * 0.735)); 
    //netVal.value = formatter.format(netVal);

}



if( rate != null &&  hours!=null)
{
    document.addEventListener("keyup", totalRate);
    document.addEventListener("keydown", getBills);
    
}




function clearAll(){
        total.nodeValue = "";
        rate.nodeValue = "";
}

function testfunction(){
    
    let count = 1; 
    //let billSet = document.createTextNode("Bill #"+ count+1);

    let mainRow = document.getElementById("mainCol");

    let newCol = document.createElement("div")
    

    newCol.setAttribute("class","col bills");
    newCol.setAttribute("id", "mainCol");
    newCol.setAttribute("style", "text-align:center;");
    newCol.setAttribute("style", "margin-right:5px;");

    let newInput = document.createElement("input");
    let text = document.createTextNode("Test");
    newInput.setAttribute("class", "bills");
    
    newCol.appendChild(newInput);
    mainRow.appendChild(newCol);
    
}