const display = document.getElementById("display");
function addelement(input){
    display.value +=input;


}
function clearout(){
    display.value =" ";
}
function calculate(){
    try{
        display.value=(display.value *1.8)+32 +" F";

    }
    catch{
        display.value=Error;
    }
}