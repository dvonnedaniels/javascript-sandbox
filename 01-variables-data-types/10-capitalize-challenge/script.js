// My partial solution
// let myString = 'developer'
// console.log(myString.charAt(0).toUpperCase())

// Answer

const myString = 'developer';

let myNewString

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString)

/*
First create a constant (const) variable, which will not be changed, called 'developer'
Then, we created a let variable so we can manipulate the string.
*/
