var num = prompt("Enter the Number Greater than 100")
var input = true;
while (input) {
    if (num > 100 && input !== null) {
        input = false;
        console.log(`The Number Entered by the User is ${num}`);
    } else {
        input = true;
        alert("Enter a Number Greater than 100")
        num = prompt("Enter the Number Greater than 100");
    }

}