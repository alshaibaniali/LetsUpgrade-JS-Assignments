var inputArray = [];
var size = Number(prompt("How many Numbers u want to add"));

for (let i = 0; i < size; i++) {
    inputArray[i] = prompt("Enter a positive Numbers" + (i + 1));
}

console.log(inputArray);
let odd = inputArray.filter(el => el % 2 != 0);
console.log(odd);

let cube = odd.map(el => el * el * el)
console.log(cube);