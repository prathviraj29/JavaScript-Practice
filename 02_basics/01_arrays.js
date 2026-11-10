
// - - - - - ARRAY CREATION - - - - - - - - - -

const myArr = [6, 4, 9, 2, 5, 7];          // Array ek variable mein multiple values store karta hai, Array ka index 0 se start hota hai.

const myHeroes = ["IronMan", "CaptainAmerica", "SpiderMan"];          // Strings ko bhi array mein store kar sakte hain.

const myArr2 = new Array(1, 2, 3, 4);          // Array create karne ka doosra tarika.


// - - - - - ACCESSING ARRAY ELEMENTS - - - - - - - - - -

// Index ki help se array ki value access karte hain.
// Index 0 = First element, Index 1 = Second element.

console.log(myArr[1]);  // 4
console.log(myArr[4]);  // 5


// - - - - - ARRAY METHODS - - - - - - - - - - 

myArr.push(3);          // push() - Array ke end mein new value add karta hai.
myArr.push(1);

myArr.pop();             // pop() - Array ke end se last value remove karta hai.

myArr.unshift(8);          // unshift() - Array ke starting mein value add karta hai.

myArr.shift();          // shift() - Array ke starting se first value remove karta hai.

console.log(myArr.includes(9));  // true          // includes() - Check karta hai ki value array mein present hai ya nahi.

console.log(myArr.indexOf(5));  // 4          // indexOf() - Kisi value ka index batata hai, value nahi milne par -1 return karta hai.

const newArr = myArr.join();              // join() - Array ki saari values ko jodkar String banata hai.

console.log(myArr);   // [ 6, 4, 9, 2, 5, 7, 3 ]
console.log(newArr);  // 6,4,9,2,5,7,3

console.log("Data Type: " + typeof newArr);  // Data Type: string


// - - - - - SLICE() AND SPLICE() - - - - - - - - - - 

console.log("Original Array:", myArr);        // Sabse pehle original array print karte hain.

// slice(start, end)
// Start index include hota hai, end index exclude hota hai.

const myNewArr1 = myArr.slice(1, 5);          // Elements ki copy deta hai, Original array change nahi hota

console.log("Slice Result:", myNewArr1);  // [ 4, 9, 2, 5 ]

console.log("After Slice:", myArr);  // [ 6, 4, 9, 2, 5, 7, 3 ]          // Check karte hain ki original array change hua ya nahi.


// splice(start, deleteCount)
// Start index se deleteCount jitne elements remove karta hai.

const myNewArr2 = myArr.splice(1, 3);          // Elements remove kar sakta hai, Original array change hota hai

console.log("Splice Result:", myNewArr2);  // [ 4, 9, 2 ]

console.log("After Splice:", myArr);  // [ 6, 5, 7, 3 ]          // Splice ke baad original array change ho chuka hai.
