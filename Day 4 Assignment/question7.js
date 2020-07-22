var enterNumber = prompt("Enter number: ");
for (var i = 2; i <= enterNumber; i++) {

    var isPrime = true;

    for (var j = 2; j < i; j++) {
        if (i % j === 0 && i !== j) {
            isPrime = false;
        }
    }
    if (isPrime === true) {
        console.log(i);
    }
}