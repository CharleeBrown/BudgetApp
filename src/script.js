"use strict";
let total = document.getElementById("total");
let rate = document.getElementById("rate");
let hours = document.getElementById("hours");
let mainBill = document.getElementById("billTotal");
let netVal = document.getElementById("net");

   let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });



function totalRate(){
    total.value = parseFloat(rate.value * hours.value);
    let netBill = document.getElementById("billNet");
    if(total.value != null){
        netVal.value = "";
        netVal.value = parseFloat(total.value * 0.735); 
        netBill.value = netVal.value - mainBill.value; 
        netBill.value = formatter.format(netBill.value);
        netVal.value = formatter.format(netVal.value);
        total.value = formatter.format(total.value);
        
        
    }
}

function billNet(){
   

    
}
if( rate != null &&  hours!=null)
{
    document.addEventListener("keyup", totalRate);
   
}
document.addEventListener("keyup", totalBills);
document.addEventListener("keyup", billNet);


function clearAll(){
       
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





function lblSwitch(event){
    event.textContext = prompt("Test");

}


    

function totalBills()
{
    document.getElementById('billTotal').value = "";
        let arr = document.getElementsByName('bill');
        let tot=0;
        console.log(arr.length);
        for(let i=0;i<arr.length;i++){
            if(parseInt(arr[i].value))
            {
                tot += parseInt(arr[i].value);
               
            }
              document.getElementById('billTotal').value = tot;    
        }
      
}



