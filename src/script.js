let total = document.getElementById("total");
let rate = document.getElementById("rate");
let hours = document.getElementById("hours");



function addBills(){
    // The goal is to query every bill section and add it up in the bill total section. 
}

function totalRate(){
    total.value =  rate.value * hours.value;
}

if( rate != null &&  hours!=null)
{
    document.addEventListener("keyup", totalRate);
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
    

    newCol.setAttribute("class","col");
    newCol.setAttribute("id", "mainCol");
    newCol.setAttribute("style", "text-align:center;");
    newCol.setAttribute("style", "margin-right:5px;");

    let newInput = document.createElement("input");
    let text = document.createTextNode("Test");
    
    newCol.appendChild(newInput);
    mainRow.appendChild(newCol);
    
}