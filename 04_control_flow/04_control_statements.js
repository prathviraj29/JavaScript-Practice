
//  - - - - - CONTROL STATEMENTS IN JAVASCRIPT - - - - - - - - - - 

// control statements ka use loop ke execution ko control karne ke liye hota hai


// - - - - - - - - - - break Statement - - - - - - - - - - 

// break statement loop ko completely stop kar deta hai

for (let i = 1; i <= 10; i++) {

    if (i === 5) {          // jaise hi break execute hota hai, loop se bahar aa jate hain.
        break;              // jab i ki value 5 hogi, loop stop ho jayega.
    }

    console.log(i);          
}


// - - - - - - - - - - continue Statement - - - - - - - - - - 

// continue statement current iteration ko skip karta hai aur next iteration par chala jata hai.

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;           // Jab i ki value 3 hogi, us iteration ka console.log skip ho jayega.
    }

    console.log(i);  // 1 2 4 5
}


// - - - - - break with while Loop - - - - - - - - - - 

let index = 1

while (index <= 10) {

    if (index === 6) {          // while loop mein bhi break use kar sakte hain.
        break;                  // index 6 hone par loop stop ho jayega.
    }

    console.log(index);  // 1 2 3 4 5
    index++;
}


// - - - - - continue with while Loop - - - - - - - - - - 

// while loop mein continue use karte waqt increment ko continue se pehle karna zaroori hai, warna infinite loop ban sakta hai.

let num = 0

while (num < 5) {

    num++;

    if (num === 3) {
        continue;
    }

    console.log(num);  // 1 2 4 5
}


// - - - - - ex: Even Numbers - - - - - - - - - - 

// 1 se 10 tak sirf even numbers print karna.

for (let i = 1; i <= 10; i++) {

    if (i % 2 !== 0) {
        continue;               // Odd number hone par current iteration skip ho jayegi.
    }

    console.log(i);  // 2 4 6 8 10
}


// - - - - - ex: Stop at a Number - - - - - - - - - - 

// 1 se 10 tak numbers print karna, lekin 7 aate hi loop stop kar dena.

for (let i = 1; i <= 10; i++) {

    if (i === 7) {
        break;
    }

    console.log(i);  // 1 2 3 4 5 6
}


