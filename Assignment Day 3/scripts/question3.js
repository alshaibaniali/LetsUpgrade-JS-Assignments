console.log("Question 2");

let marks = Number(prompt('Enter your Mark:'));

// if (marks >= 90) {
//     console.log('Mark is', +marks, ' and grade is A');
// } else if (marks >= 70) {
//     console.log('Mark is', +marks, ' and grade is B');
// } else if (marks >= 50) {
//     console.log('Mark is', +marks, ' and grade is C');
// } else {
//     console.log('Mark is', +marks, ' and grade is Fail');
// }


// the same code using Switch

switch (marks) {
    case marks >= 90:
        console.log('Mark is', +marks, ' and grade is A');
        break;
    case marks >= 70:
        console.log('Mark is', +marks, ' and grade is B');
        break;
    case marks >= 50:
        console.log('Mark is', +marks, ' and grade is C');
        break;
    default:
        console.log('Mark is', +marks, ' and grade is Fail');
        break;
}