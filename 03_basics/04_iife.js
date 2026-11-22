
// - - - - - NORMAL FUNCTION VS IIFE - - - - - - - - - - 

function greet() {                       // Normal function ko pehle define aur phir call karna padta hai.
    console.log("Hello World");
}

greet();


// - - - - - BASIC IIFE - - - - - - - - - - 

// IIFE ( Immediately Invoked Function Expression ), ye function define hote hi immediately execute ho jata hai.

(function () {
    console.log("IIFE Executed");
})();


// - - - - - IIFE WITH PARAMETERS - - - - - - - - - - 

(function (username) {                           // IIFE mein parameters bhi pass kar sakte hain.
    console.log(`Welcome ${username}`);
})("Prathviraj");


// - - - - - IIFE WITH RETURN VALUE - - - - - - - - - - 

const result = (function (a, b) {
    return a + b;                          // IIFE value return bhi kar sakta hai
})(10, 20);

console.log(result);  // 30


// - - - - - ARROW FUNCTION IIFE - - - - - - - - - - 

(() => {                                         // Arrow Function ka use karke bhi IIFE bana sakte hain
    console.log("Arrow Function IIFE");
})();


// - - - - - NAMED IIFE - - - - - - - - - - 

(function greetUser() {                          // IIFE ko naam bhi de sakte hain.
    console.log("Named IIFE Executed");
})();


// - - - - - IIFE AND PRIVATE VARIABLES - - - - - - - - - - 

// IIFE apna separate function scope create karta hai, iske andar declare kiye gaye variables directly bahar access nahi hote.

(function () {
    const password = "12345";

    console.log(password);
})();

// console.log(password);  // ReferenceError


// - - - - - MULTIPLE IIFE - - - - - - - - - - 

// - - - - - - - - - - JavaScript mein multiple IIFE bhi likh sakte hain.

(function () {
    console.log("First IIFE");
})();

(function () {
    console.log("Second IIFE");
})();


