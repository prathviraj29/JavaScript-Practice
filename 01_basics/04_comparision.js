
// - - - - - - - - - Comparison Operators - - - - - - - - -

console.log(2 > 1);  // true        // Greater than (>) : Kya left value right value se badi hai?

console.log(2 >= 1);  // true        // Greater than or equal to (>=)

console.log(2 < 1);  // false        // Less than (<) : Kya left value right value se chhoti hai?

console.log(2 == 1);  // false        // Equal to (==) : Dono values equal hain ya nahi?

console.log(2 != 1);  // true        // Not equal to (!=) : Dono values alag hain ya nahi ?


// - - - - - - - - - String and Number Comparison - - - - - - - - -

console.log("2" > 1);   // true        // Comparison ke time JavaScript string ko number mein convert kar sakti hai
console.log("02" > 1);  // true


// - - - - - - - - - Null Comparison - - - - - - - - -

console.log(null > 0);   // false        // Relational comparison mein null ko number 0 mein convert kiya jata hai.
console.log(null == 0);  // false

console.log(null >= 0); // true        // null >= 0 ka result true aata hai.


// - - - - - - - - - Undefined Comparison - - - - - - - - -

// undefined ko number mein convert karne par NaN milta hai.
// NaN ke saath relational comparisons false hote hain.

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false


// - - - - - - - - - Strict Equality (===) - - - - - - - - -

// === value ke saath datatype bhi check karta hai, isme automatic datatype conversion nahi hota.

console.log("2" === 2);  // false (String !== Number)


// - - - - - - - - - Loose vs Strict Equality - - - - - - - - -

console.log("2" == 2);   // true (Datatype conversion hota hai)
console.log("2" === 2);  // false (Datatype same nahi hai)

