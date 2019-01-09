
let firstNum = 0;
let secondNum = 0;
let result = 0;

function setValues() {
    firstNum = Number(document.getElementById("number1").value);
    secondNum = Number(document.getElementById("number2").value);
    result = Number(document.getElementById("result").value);
}

function sum() {
    console.log("sum started");
    setValues();
    result = firstNum + secondNum;
    document.getElementById("result").value = result;
}

function subtract() {
    setValues();
    result = firstNum - secondNum;
    document.getElementById("result").value = result;
}

function multiply() {
    setValues();
    result = firstNum * secondNum;
    result1 = result.toFixed(2);
    document.getElementById("result").value = result1;
}

function divide() {
    setValues();
    result = firstNum / secondNum;
    result1 = result.toFixed(2);
    document.getElementById("result").value = result1;
}