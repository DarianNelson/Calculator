//ADD EVENTS TO BUTTONS VIA JS INSTEAD OF HTML
var buttonElement = document.querySelector(".calculator-keys");
buttonElement.addEventListener("click", BtnClicked);
function BtnClicked() {
    webCalculator.displayValue = buttonElement.value;
}//end function

var displayElement = document.getElementById("display");


//DEFINE CLASS FOR CALCULATOR
    class Calculator {
        //FIELDS
        displayValue = "";

        constructor() {
            this.displayValue = "";
        }//end constructor;
    }//end class

//CREATE INSTANCE OF CALCULATOR CLASS
    webCalculator = new Calculator();
function InputDigit(digit) {
    webCalculator.displayValue += digit;
    console.log("pressed" + digit);
    UpdateDisplay(); 
}//end function

function InputOperator(operator) {
    webCalculator.displayValue += operator;
    UpdateDisplay();
}//end function
function ResetCalculator() {
    webCalculator.displayValue = "";
    UpdateDisplay();
}//end function
function UpdateDisplay() {
    displayElement.value = webCalculator.displayValue;
}//end function
function ProcessInput() {
    var expression = webCalculator.displayValue;
    var result = eval(expression);

    webCalculator.displayValue = result;
    UpdateDisplay();
}//end function