// Variables in JavaScript

const accountId = 13415475;                              // const - Value ko reassign nahi kar sakte

let accountEmail = "gillu@gmail.com";                   // let - Value ko change kar sakte hain

var accountPassword = "12345678";                       // var - Old way of declaring variables

// Variable declaration without assigning a value
let accountCity = "indore";
let accountState;                                             

// accountId = 22485617;                                 // Not allowed because const cannot be reassigned

// Updating values of let and var variables
accountEmail = "shubham@gmail.com";
accountPassword = "99933300";
accountCity = "khargone";

console.log(accountId);


// - - - - - - - - - Difference between let, const and var - - - - - - - - - 

/*

- var purane time mein variables declare karne ke liye use hota tha.
- let aur const modern JavaScript mein use hote hain.
- var ko same scope mein dobara declare kar sakte hain.
- let ko same scope mein dobara declare nahi kar sakte.
- const ki value ko dobara assign nahi kar sakte.
- let aur const block scope follow karte hain, jabki var function scope follow karta hai.

                Prefer let and const instead of var
*/


