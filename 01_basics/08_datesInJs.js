//  Dates : -    

let myDate = new Date();

/* console.log(typeof myDate);
console.log(myDate.toString());                       // Date ko readable format me dikhata hai
console.log(myDate.toDateString());                   // Sirf day, month aur year dikhata hai
console.log(myDate.toLocaleString());                 // Local format me date + time dikhata hai
console.log(myDate.toISOString());                    // Date ko standard ISO format me dikhata hai
console.log(myDate.toJSON());                         // Date ko JSON format me convert karta hai
console.log(myDate.toLocaleDateString());             // Local format me sirf date dikhata hai
console.log(myDate.getTime());                        // Date ko milliseconds (timestamp) me deta hai
console.log(myDate.getFullYear());                    // Current year deta hai
console.log(myDate.getMonth());                       // Current month deta hai (0 = January, 11 = December)
console.log(myDate.getDate());                        // Month ki current date deta hai (1 se 31)
console.log(myDate.getDay());     */                    // Week ka current day deta hai (0 = Sunday, 6 = Saturday)


// let myCreatedDate = new Date(2023, 0, 23);                 // Specific date banata hai - 23 January 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);           // Specific date + time banata hai - 23 January 2023, 5:03 AM
// let myCreatedDate = new Date("2023-01-14");                // Date ko string format me dekar specific date banata hai
let myCreatedDate = new Date("01-14-2023");                   // MM-DD-YYYY format me specific date create karta hai

console.log(myCreatedDate.toLocaleString());                  // Date ko local readable format me dikhata hai  


let myTimeStamp = Date.now();                     // 1 January 1970 se lekar abhi tak itne milliseconds beet chuke hain(timestamp)
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());             // specific date ka timestamp milliseconds me dega
console.log(Math.floor(Date.now()/1000));         // milliseconds ko seconds me conversion


 



