var no= prompt("Enter the number to print the multiplication table on window: ")
document.write(`The table of ${no} is:<br>`);
for (i=1 ; i<=10 ; i++)
{
    document.write(`${no} X ${i}=${no*i}<br>`);
}