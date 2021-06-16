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