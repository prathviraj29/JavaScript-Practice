
// - - - - - GLOBAL SCOPE - - - - - - - - - - 

// jo variable function ya block ke bahar declare hota hai, use Global Scope variable kehte hain

const college = "SDBC";          // is variable ko file ke different parts mein access kar sakte hain.

function showCollege() {
    console.log(college);
}

showCollege();  // SDBC


// - - - - - LOCAL / FUNCTION SCOPE - - - - - - - - - - 

// jo variable function ke andar declare hota hai, use Local ya Function Scope variable kehte hain

function studentDetails() {
    const username = "prathviraj";          // isko sirf usi function ke andar access kar sakte hain.
    const age = 19;

    console.log(username);
    console.log(age);
}

studentDetails();  // prathviraj
                   // 19

// console.log(username);          // Error: username is not defined


// - - - - - BLOCK SCOPE - - - - - - - - - - 

// Curly braces {} ke andar declare kiye gaye let aur const variables block scoped hote hain.

if (true) {
    let marks = 85;
    const subject = "javaScript";

    console.log(marks);    // 85
    console.log(subject);  // javaScript
}

// console.log(marks);            // Error: marks is not defined

// console.log(subject);          // Error: subject is not defined


// - - - - - NESTED FUNCTIONS - - - - - - - - - - 

// jab ek function ke andar doosra function define kiya jata hai, use Nested Function kehte hain.

function calculate() {

    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    console.log(add(10, 20));
    console.log(multiply(5, 4));
}

calculate();  // 30
              // 20


// - - - - - LEXICAL SCOPE - - - - - - - - - - 

// inner function apne outer function ke variables ko access kar sakta hai.

// Ye access function ki location par depend karta hai.

function outerFunction() {
    const username = "rahul";

    function innerFunction() {
        console.log(username);
    }

    innerFunction();
}

outerFunction();  // rahul


// - - - - - SCOPE CHAIN - - - - - - - - - - 

// javaScript variable ko find karne ke liye current scope se outer scope ki taraf check karti hai.
// Is process ko Scope Chain kehte hain..

const country = "india";

function firstFunction() {
    const state = "MP";

    function secondFunction() {
        const city = "indore";

        console.log(city);
        console.log(state);
        console.log(country);
    }

    secondFunction();
}

firstFunction();  // indore
                  // MP
                  // india



