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

function getText(clicked_id){
    let txt = prompt("What's your middle name?");
    
    clicked_id = txt;
    return clicked_id;
}

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


if( rate != null &&  hours!=null)
{
    document.addEventListener("keyup", totalRate);
}

document.addEventListener("keyup", totalBills);
document.addEventListener("keyup", billNet);


function totalBills()
{
    // This function actuvates with keyup. 
    // It iterates through the amount entered into the bill sections.
    // Takes the sum and changes the total to reflect the sum.
    document.getElementById('billTotal').value = "";
        let arr = document.getElementsByName('bill');
        let tot=0;
        for(let i=0;i<arr.length;i++){
            if(parseInt(arr[i].value))
            {
                tot += parseInt(arr[i].value);
            }
              document.getElementById('billTotal').value = tot;    
        }
}



