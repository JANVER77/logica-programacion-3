const propmt = require('prompt-sync')();

function factorial(n) {
    if (n < 0) {
        return "'Ingrese un numero mayor a 0: \n";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const number = parseInt(propmt('Enter a non-negative integer: '), 10);
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);