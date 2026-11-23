
// - - - - - CONTROL FLOW IN JS - - - - - - - - - - 

// control flow ka matlab hai ki conditions ke basis par program decide karta hai ki konsa code execute hoga.


// - - - - - if Statement - - - - - - - - - - 

const temperature = 41

if (temperature > 40) {                                     // if condition true hone par hi uske andar ka code execute hota hai
    console.log("temperature is greater than 40");
}


// - - - - - if-else Statement - - - - - - - - - - 

const score = 85

if (score >= 50) {                               // agar condition true hai to if execute hoga, 
    console.log("you passed in exam");
} else {                                         // otherwise else execute hoga.
    console.log("you failed in exam");
}


// - - - - - else-if Ladder - - - - - - - - - - 

// jab multiple conditions check karni ho, tab else-if ka use karte hain.

const marks = 75

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 33) {
    console.log("Grade D");
} else {
    console.log("Fail");
}


// - - - - - Nested if-else - - - - - - - - - - 

// jab ek if ke andar doosra if use karte hain, use nested if-else kehte hain.

const userLoggedIn = true
const debitCard = true

if (userLoggedIn) {
    console.log("user is logged in");

    if (debitCard) {
        console.log("allow to buy course");
    } else {
        console.log("please add a debit card");
    }

} else {
    console.log("please login first");
}


// - - - - - Logical Operators - - - - - - - - - - 

const loggedInFromGoogle = true
const loggedInFromEmail = false

if (userLoggedIn && debitCard) {                       // && (AND): dono conditions true honi chahiye.
    console.log("you can access the course");
}

if (loggedInFromGoogle || loggedInFromEmail) {          // || (OR): koi ek condition true honi chahiye.
    console.log("user logged in");
}

const isBlocked = false

if (!isBlocked) {                                // ! (NOT): boolean value ko reverse karta hai.
    console.log("user is not blocked");
}


// - - - - - switch Statement - - - - - - - - - - 

// jab ek variable ki value ke basis par multiple cases check karne ho, tab switch use karte hain.

const month = 4

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid month");
        break;                                 // break current switch ko stop karta hai.
}                                              // Agar break nahi lagayenge to next cases bhi execute ho sakte hain


// - - - - - Ternary Operator - - - - - - - - - - 

// ternary operator if-else ka short form hai.

// syntax:  condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("price is less than or equal to 80")  : console.log("price is greater than 80");
    
    
