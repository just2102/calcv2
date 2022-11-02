let inputField = document.getElementById("input_field")
// basic operations
function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

let operator='';
// makes sure that user can input all operators using both mouse and keyboard
let addButton       =   document.getElementById("button-increment");
addButton.addEventListener('click',(event)=>getOperator('add'));
let subtractButton  =   document.getElementById("button-subtract");
subtractButton.addEventListener('click',(event)=>getOperator('subtract'));
let multiplyButton  =   document.getElementById("button-multiply");
multiplyButton.addEventListener('click',(event)=>getOperator('multiply'));
let divideButton    =   document.getElementById("button-divide");
divideButton.addEventListener('click',(event)=>getOperator('divide'));

document.addEventListener('keyup', function(event) {
    if (event.key==='+') {
        getOperator('add')
    } else if (event.key==='-') {
        getOperator('subtract');
    } else if (event.key==='*') {
        getOperator('multiply')
    } else if (event.key==='/') {
        getOperator('divide')
    }
})
let firstNum    =   0
let a   =   0
// stores the operator in the 'operator' variable after clicking one of the operators' (+,-,*,/) buttons
// also stores the first number in the firstNumber string, but then converts it to number and saves it in the 'a' variable
function getOperator(button) {
    operator = button;
// when user selects operator via keyboard, he also adds this operator to the end of 'firstNum' variable.
// to prevent this, we make an array from inputField.value, check if its last element is an operator and pop() it.
    let checkForOperatorArray   =   inputField.value.split('');
    for (let i = 0 ; i<checkForOperatorArray.length; i++) {
        if (checkForOperatorArray[i]=='+' || checkForOperatorArray[i]=='-' || checkForOperatorArray[i]=='*' || checkForOperatorArray=='/') {
            checkForOperatorArray.pop()
        }
    }
    inputField.value    =   checkForOperatorArray.join('');
    firstNum=inputField.value;
    inputField.value    =   '';
    a   =   Number(firstNum)
}
let secondNum   =   0;
let b   =   0
// stores second number after clicking "=" in the 'secondNum' variable as a string, but then converts it to Number and saves it in the variable 'b'
function getSecondNum() {
    secondNum   =   inputField.value;
    inputField.value='';
    b   =   Number(secondNum)
}

// when you click "=" you store the value of Second number and display result using the evaluate() function
let resultButton    =   document.getElementById('button-result')
resultButton.addEventListener('click',getSecondNum)
document.addEventListener('keyup',function(event) {
    if (event.key==='Enter') {
        getSecondNum();
        evaluate(a,b,operator);
    }
})
resultButton.addEventListener('click', (event) => evaluate(a,b,operator))


let result = 0
function evaluate(a,b,operator) {
    if (operator=='add') {
        result = add(a,b);
        inputField.value    =   result;
    } else if (operator=='subtract') {
        result  =   subtract(a,b);
        inputField.value    =   result;
    } else if (operator=='multiply') {
        result  =   multiply(a,b);
        inputField.value    =   result;
    } else if (operator=='divide') {
        result  =   divide(a,b);
        inputField.value    =   result;
    }
}
