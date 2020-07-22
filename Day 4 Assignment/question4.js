console.log(" ENTER BELOW OPTIONS (1 TO 6) TO PERFORM OPERATION")
console.log("1.Addition");
console.log("2.Subtraction");
console.log("3.Multiplication");
console.log("4.Division");
console.log("5.Modulo or Reamainder");
console.log("6.Square Root of number")

var num1 = prompt("Enter a First Number");
var num2 = prompt("Enter a Second Number");
var operation = Number(prompt("Enter a value for operation"));

switch (operation) {
    case 1:
        console.log(`Addition of two Numbers are ${num1 + num2}`);
        break;
    case 2:
        console.log(`Subtraction of two Numbers are ${num1 - num2}`);
        break;
    case 3:
        console.log(`Multiplication of two Numbers are ${num1 * num2}`);
        break;
    case 4:
        console.log(`Division of two Numbers are ${num1 / num2}`);
        break;
    case 5:
        console.log(`Remainder when divide (${num1} / ${num2}) are ${num1 % num2}`);
        break;
    case 6:
        console.log(`Square root of number ${num1} is ${(Math.sqrt(num1).toFixed(2))}`);
        console.log(`Square root of number ${num2} is ${(Math.sqrt(num2).toFixed(2))}`);
        break;
    default:
        console.log("Enter number 1 TO 6 to perform operation");
        break;
}