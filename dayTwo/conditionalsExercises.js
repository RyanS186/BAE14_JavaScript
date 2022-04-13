'use strict'

// 1
// What are the return values of the following code?

let strictA = true;
let strictB = 1;

console.log(strictA == strictB);
console.log(strictA === strictB);

// 2
// Considering the following code, what will be the results be?

console.log(strictA != strictB);
console.log(strictA !== strictB);

const myAge = (age) => {
    if (age >= 18 && age <= 65) {
        console.log("Age is in range")
    } else if (age < 18) {
        console.log("Underage")
    } else {
        console.log("Age is NOT in range")
    }
}

myAge(26)

const overFifty = (age) => {
    let result = age >= 50 ? "50+" : "Under 50";
    console.log(result);
}

overFifty(60)

