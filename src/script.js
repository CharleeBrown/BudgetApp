let total = document.getElementById("total");
let rate = document.getElementById("rate");
let hours = document.getElementById("hours");



function totalRate(){
    total.value =  rate.value * hours.value;
}

if( rate != null &&  hours!=null)
{
document.addEventListener("keyup", totalRate);

//rate.addEventListener("change", totalRate);

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
    newCol.setAttribute("style", "text-align:center;");

    let newInput = document.createElement("input");
    let text = document.createTextNode("Test");
    
    newCol.appendChild(newInput);
    mainRow.appendChild(newCol);
    
}