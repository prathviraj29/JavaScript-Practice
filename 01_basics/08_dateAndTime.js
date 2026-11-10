
// - - - - - CURRENT DATE AND TIME - - - - - - - - - - 

let myDate = new Date();                     // new Date() current date aur time ka object banata hai, date object ka data different formats me dekh sakte hain

console.log(typeof myDate);  // object          // Date JavaScript mei ek tarah ka object hota hai

console.log(myDate.toString());             // Complete date aur time readable format mein deta hai.

console.log(myDate.toDateString());           // Sirf day, month, date aur year deta hai.

console.log(myDate.toLocaleString());          // Local format mein date + time deta hai.

console.log(myDate.toISOString());           // Date ko standard ISO format mein convert karta hai

console.log(myDate.toJSON());                 // Date ko JSON-compatible string format mein deta hai.

console.log(myDate.toLocaleDateString());          // Sirf date local format mein deta hai.


// - - - - - CREATING A CUSTOM DATE - - - - - - - - - - 

// let myCreatedDate = new Date(2023, 0, 23);          // Apni marzi ki date create kar sakte hain

// NOTE: Yahan month 0 se start hota hai.
// 0 = January, 1 = February ... 11 = December

let myCreatedDate = new Date(2023, 0, 23, 5, 3);  //23 January 2023, 5:03 AM          // Date ke saath time bhi de sakte hain

// let myCreatedDate = new Date("2023-01-14");          // ISO date string ka use karke date create karna.

let myCreatedDate_ = new Date("01-14-2023");          // String format mein custom date, Format: MM-DD-YYYY

console.log(myCreatedDate.toLocaleString());          // Date ko readable format mein print karna.


// - - - - - - - - - - TIMESTAMPS - - - - - - - - - - 

let myTimeStamp = Date.now();           // Date.now() current time ka timestamp deta hai, Timestamp = 1 January 1970 se abhi tak beet chuke milliseconds ki total value.

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());          // getTime() kisi specific date ka timestamp deta hai.

console.log(Math.floor(Date.now() / 1000));          // Milliseconds ko seconds mein convert karna, 1000 milliseconds = 1 second.


// - - - - - - - - GET DATE METHODS - - - - - - - - - -

let newDate = new Date();

console.log(newDate.getFullYear());           // getFullYear() current year deta hai.

console.log(newDate.getMonth() + 1);          // getMonth() current month deta hai, Actual month number ke liye +1 karte hain.

console.log(newDate.getDate());          // getDate() month ki current date deta hai.

console.log(newDate.getDay());           // getDay() week ka current day deta hai, Sunday = 0, Monday = 1 ... Saturday = 6.


// - - - - - - - - GET TIME METHODS - - - - - - - - - -

console.log(newDate.getHours());          // getHours() current hour deta hai (0-23).

console.log(newDate.getMinutes());          // getMinutes() current minutes deta hai (0-59).

console.log(newDate.getSeconds());          // getSeconds() current seconds deta hai (0-59).


// - - - - - toLocaleString() WITH OPTIONS - - - - - - - - - - 

// Is method se date ko apne desired format me display kar sakte hain.

console.log(
    newDate.toLocaleString('default', {
        weekday: "long"                          // weekday: "long" ka matlab complete day name, example: Monday, Tuesday, Wednesday.
    })
);


console.log(
    newDate.toLocaleString('default', {
        month: "long"                            // Month ka complete name display karna.
    })
);


console.log(
    newDate.toLocaleString('default', {
        weekday: "long",                         // Date aur time ko customize karna.
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })
);
