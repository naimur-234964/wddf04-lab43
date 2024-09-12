console.log("Choose an Option : \n1. Add \n2. Subtract \n3. Multiply \n4. Divide");

var firstNumber = parseInt(prompt("Enter First Number : "));
var secondNumber = parseInt(prompt("Enter Second Number : "));
var option  = parseInt(prompt("Choose an Operation : "));


// Checking for isNan
var firstNumberCon = (isNaN(firstNumber));
var secondNumberCon = (isNaN(secondNumber));
var optionCon = (isNaN(option));
var result;


if(firstNumberCon || secondNumberCon || optionCon){
    console.log("Sorry! It seems you've input a wrong value");
}else{
    console.log('input succesful');
}
