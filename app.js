function userName(){
    var name = prompt("what is your name?");
    return name
}

function userTemperature(){
    var temperature = prompt("what is your temperature?");
    return temperature
}

// guarda userTemperature en una variable.

function CompConvert(){
    var convert = prompt("If do you want to convert from Fahrenheit to Celsius  please enter f, or from Celsius to Fahrenheit please enter c?");
    return convert
}

function convertNumbers(n, c, t){
   

 if (c == "c"){
    var c = (t * 9 / 5 + 32);
    alert( `${n} ${t} Cº is ${c} Fº.`)
 }
if (c == "f"){
    var f = ((t - 32) * 5) / 9;
    alert(`${n} ${t} Fº is ${f} Cº.`)
 } else {
    alert("You could only press `f` or `c`. This program will end now.");
 }
}
convertNumbers(userName(), CompConvert(), userTemperature())



