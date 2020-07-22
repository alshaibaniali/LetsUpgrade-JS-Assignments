var name = prompt("Enter the Sales person Name")
var salesamt = prompt(`Enter sales amount made by ${name}`);
var comissionamt;
if (salesamt <= 5000) {
    comissionamt = (2 / 100) * salesamt;
} else if (salesamt > 5000 && salesamt <= 10000) {
    comissionamt = (5 / 100) * salesamt;
} else if (salesamt > 10000 && salesamt <= 20000) {
    comissionamt = (7 / 100) * salesamt;
} else {
    comissionamt = (10 / 100) * salesamt;
}
console.log(`${name} made a sale of ${salesamt} and  Total Commission Earned by him is ${comissionamt}`);