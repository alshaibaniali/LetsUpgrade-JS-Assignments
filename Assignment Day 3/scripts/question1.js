console.log("Question 1");



let num = Number(prompt("Enter a number:"));

function evenOdd() {


    if (num % 2 == 0) {
        console.log('The number entered is ' + num, ' and number is Even');
    } else {
        console.log('The number entered is ' + num, ' and number is Odd');
    }
};
evenOdd();