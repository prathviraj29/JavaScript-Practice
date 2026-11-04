"use strict";                                 // JavaScript ko strict mode mein run karta hai

// alert(3 + 3);                                 // Browser mein alert popup dikhata hai
                                              // we are using nodejs, not browser
                                              
let name = "Ruturaj";
let age = 29;
let isLoggedIn = false;
let state;

// Code readability high honi chahiye, taaki code easily samajh aa sake.


// - - - - - - - - - -  Data Types in JavaScript  - - - - - - - - - -

// number => Normal numeric values
// bigint => Bahut bade integer values
// string => Text ko represent karta hai
// boolean => true ya false value
// null => Intentionally empty value
// undefined => Variable declare hua hai, par value assign nahi hui
// symbol => Unique value create karta hai
// object => Multiple properties aur values ko store karta hai


// typeof - Kisi value ka data type check karta hai.

console.log(typeof name);                // string
console.log(typeof age);                 // number
console.log(typeof isLoggedIn);          // boolean
console.log(typeof state);               // undefined
console.log(typeof undefined);           // undefined
console.log(typeof null);                // object

