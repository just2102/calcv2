let inputField = document.getElementById("input_field")
// restrict from typing ',' into the input box
document.addEventListener('keyup', function(event) {
    if (event.key===',') {
        inputField.value="Please use '.' to input non-integral numbers"
    }
})

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
// mouse input
let addButton       =   document.getElementById("button-increment");
addButton.addEventListener('click',(event)=>getOperator('add'));
let subtractButton  =   document.getElementById("button-subtract");
subtractButton.addEventListener('click',(event)=>getOperator('subtract'));
let multiplyButton  =   document.getElementById("button-multiply");
multiplyButton.addEventListener('click',(event)=>getOperator('multiply'));
let divideButton    =   document.getElementById("button-divide");
divideButton.addEventListener('click',(event)=>getOperator('divide'));
// keyboard input
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
// add value to inputField by pressing number buttons
// get all the number buttons from HTML file and save them into variables
let zero = document.getElementById("button-zero");
let one =   document.getElementById("button-one");
let two =   document.getElementById("button-two");
let three =   document.getElementById("button-three");
let four =   document.getElementById("button-four");
let five =   document.getElementById("button-five");
let six =   document.getElementById("button-six");
let seven =   document.getElementById("button-seven");
let eight =   document.getElementById("button-eight");
let nine =   document.getElementById("button-nine");
// when user presses one of these buttons, execute addNum(num) function;
zero.addEventListener('click',(event)=>addNum('0'));
one.addEventListener('click',(event)=>addNum('1'));
two.addEventListener('click',(event)=>addNum('2'));
three.addEventListener('click',(event)=>addNum('3'));
four.addEventListener('click',(event)=>addNum('4'));
five.addEventListener('click',(event)=>addNum('5'));
six.addEventListener('click',(event)=>addNum('6'));
seven.addEventListener('click',(event)=>addNum('7'));
eight.addEventListener('click',(event)=>addNum('8'));
nine.addEventListener('click',(event)=>addNum('9'));

function addNum(num) {
    inputField.value+=num;
}


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
        if (checkForOperatorArray[i]=='+' || checkForOperatorArray[i]=='-' || checkForOperatorArray[i]=='*' || checkForOperatorArray[i]=='/') {
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
    if (operator=='add' && b!=0) {
        result = add(a,b);
        inputField.value    =   result;
    } else if (operator=='subtract' && b!=0) {
        result  =   subtract(a,b);
        inputField.value    =   result;
    } else if (operator=='multiply' && b!=0) {
        result  =   multiply(a,b);
        inputField.value    =   result;
    } else if (operator=='divide' && b!=0) {
        result  =   divide(a,b);
        inputField.value    =   result;
    } else {
        inputField.value="Don't try this on me!"
    }
}

//  clear function (assigned to clearButton) resets all our variables
let clearButton =   document.getElementById('button-clear');
clearButton.addEventListener('click', clear)
function clear() {
    inputField.value    =   '';
    firstNum    =   0;
    secondNum   =   0;
    operator    =   0;
}