
// - - - - - LOOPS IN JAVASCRIPT - - - - - - - - - - 

// loop ka use kisi code ko baar-baar execute karne ke liye hota hai


// - - - - - - - - - - for Loop - - - - - - - - - - 

// for loop tab use karte hain jab humein pata ho ki code kitni baar execute karna hai

// syntax: for (initialization; condition; increment/decrement) {
//             code
//         }

for (let i = 1; i <= 5; i++) {
    console.log(i);             // 1 2 3 4 5
}

// i = 1 se loop start hoga, i <= 5 condition check hogi, i++ har iteration ke baad i ki value 1 badhayega.


// - - - - - for Loop with Array - - - - - - - - - - 

// array ke elements ko access karne ke liye bhi for loop use kar sakte hain.

const myArray = ["arshad", "keshav", "prathviraj"]

for (let i = 0; i < myArray.length; i++) {     // i = 0 se start hoga kyunki array ka index 0 se start hota hai, myArray.length array ke total elements batata hai
    console.log(myArray[i]);                
}


// - - - - - Nested for Loop - - - - - - - - - - 

// jab ek loop ke andar doosra loop use karte hain, use nested loop kehte hain.

for (let i = 1; i <= 3; i++) {

    console.log(`outer loop: ${i}`);

    for (let j = 1; j <= 3; j++) {
        console.log(`inner loop: ${j}`);          // inner loop har baar complete chalega jab outer loop ki ek iteration complete hoti hai.
    }
}


// - - - - - - - - - - while Loop - - - - - - - - - - 

// while loop tab tak execute hota hai jab tak condition true hoti hai.

let index = 1

while (index <= 5) {             // Condition pehle check hoti hai, Uske baad code execute hota hai.
    console.log(index);
    index++;
}


// - - - - - - - - - - do-while Loop - - - - - - - - - - 

// do-while loop mein code pehle execute hota hai aur condition baad mein check hoti hai.

// isliye ye kam se kam ek baar zaroor execute hota hai.

let score = 1

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 5);

//  - - - - - - - - - - condition false hone par bhi ek baar execute hoga.

let marks = 10

do {
    console.log(`marks are ${marks}`);
    marks++;
} while (marks < 5);


// - - - - - for...of Loop - - - - - - - - - - 

// for...of ka use iterable values ke elements ko access karne ke liye hota hai, jaise Array aur String. 

const arr = [7, 18, 45,]

for (const num of arr) {
    console.log(num);             // har iteration mein array ka next element num mein aayega
}


//  - - - - - - - - - - String ke saath for...of 

const greetings = "jay hoo"

for (const char of greetings) {
    console.log(char);
}


// - - - - - for...in Loop - - - - - - - - - - 

// for...in ka use object ki keys ko access karne ke liye hota hai.

const myObject = {
    name: "archana",
    age: 19,
    city: "Indore"
}

for (const key in myObject) {
    console.log(key);                  // object ki keys print hongi: name, age, city
}


// - - - - - - - - - - Keys ke through values access karna:

for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}


