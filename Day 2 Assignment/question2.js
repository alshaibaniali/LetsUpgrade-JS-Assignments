//Assignment 2

//The remaining methods of strings and Arrays with examples


//1 - Reaplac()

/*The replace() method searches a string
for a specified value, or a regular expression, and returns a new string where the specified values are replaced.*/

//Example:

//Return a string where "Ali Alshaibani" is replaced with "LetsUpgrade"
// var str = "Ali Alshaibani!";
// var res = str.replace("Ali Alshaibani!", "LetsUpgrade");
//console.log(res);

/*


2 - ReplacAll()

The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.The pattern can be a string or a RegExp, and the replacement can be a string or a
function to be called for each match. */


//Example:

//let p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

//let regex = /dog/gi;

//console.log(p.replaceAll(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

//console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

/*

3 - substring()

The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
This method extracts the characters in a string between "start" and "end", not including "end"
itself.*/

//Example:

// let str = "Hello world!";
// let res = str.substring(1, 4);
// console.log(res);

/*
4 - Splice()


The splice() method adds / removes items to / from an array, and returns the removed item(s).

This method changes the original array. */

//Example:

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

/*
5 - delete()

Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete */

//Example:

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits);

/*

6-shift()

Shifting is equivalent to popping, working on the first element instead of the last.
The shift() method removes the first array element and "shifts" all other elements to a lower index
*/

//Example:

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift(); // Removes the first element "Banana" from fruits
// console.log(fruits);


/*

7 - unshift()

The unshift() method adds a new element to an array(at the beginning), and "unshifts"
older elements */

//Example:

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // Adds a new element "Lemon" to fruits
console.log(fruits);