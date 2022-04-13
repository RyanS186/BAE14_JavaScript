// Blackjack

// function blackjack(handOne, handTwo) {
//     if (handOne <= 21 && (handOne >= handTwo || handTwo > 21)) {
//         return handOne;
//     } else if (handTwo <= 21 && (handTwo >= handOne || handOne > 21)) {
//         return handTwo;
//     } else if (handOne && handTwo > 21) {
//         return 0;
//     }
// }

// console.log(blackjack(10,21))
// console.log(blackjack(20,18))
// console.log(blackjack(1,22))
// console.log(blackjack(22,23))

// ---------------------------------------------------------------------------------

// Unique Sum

// function uniqueSum(nums) {
//     let sum = 0;
//     nums.sort();
//     for (let i=0; i < nums.length; i++){
//         if (nums[i] !== nums[i+1] && nums[i] !== nums[i-1]){
//             sum += nums[i];
//         }
//     }
//     return sum;
// }
// console.log(uniqueSum([1,2,3]))
// console.log(uniqueSum([3,3,3]))
// console.log(uniqueSum([1,1,2]))

// ---------------------------------------------------------------------------------

// Taxes

// function taxOne(salary) {
//     if (salary < 15000) {
//         return 0;
//     } else if (salary >= 15000 && salary < 20000) {
//         return 10;
//     } else if (salary >= 20000 && salary < 30000) {
//         return 15;
//     } else if (salary >= 30000 && salary < 45000) {
//         return 20;
//     } else if (salary >= 45000) {
//         return 25;
//     }
// }
// console.log(taxOne(16000))

// function taxTwo(salary) {
//     if (salary < 0 || (salary >= 0 && salary < 15000)) {
//         return salary / 100 * 10;
//     } else if (salary >= 15000 && salary <= 19999) {
//         return salary / 100 * 10;
//     } else if (salary >= 20000 && salary <= 29999) {
//         return salary / 100 * 15;
//     } else if (salary >= 30000 && salary <= 44999) {
//         return salary / 100 * 20;
//     } else {
//         return salary / 100 * 25;
//     }
// }
// console.log(taxTwo(16000))

// function taxThree(salary) {
//     return (salary /100) * taxOne(salary)
// }
// console.log(taxThree(16000))

// ---------------------------------------------------------------------------------

// Fizzbuzz

// function fizzBuzz(num) {

//     for (let i = 1; i <= num; i++) {
//         let output = "";
//         if ( i % 3 == 0) {
//             output += "Fizz";
//         }
//         if (i % 5 == 0) {
//             output += "Buzz";
//         }
//         if (output == "") {
//             output = i;
//         }
//         console.log(output);
//     }
// }

// fizzBuzz(100)

// ---------------------------------------------------------------------------------

// Coins

// Given a cost and an amount, work out the change given in specific coinage.
// For example; the cost is £4.58 and the customer pays with a £20 note so as change they receive:

// 1 £10 note
// 1 £5 note
// 2 20p coins
// 1 2p coin

const calculateChange = (cost, amount) => {
    // Converting to pence
    cost = cost * 100
    amount = amount * 100

    // Calculates how much we need to return to the customer
    let returnValue = amount - cost
    // Creates an object
    let change = {};

    // Creating the key and the values for the object
    const currencyType = ["£20 Note", "£10 Note", "£5 Note", "£2", "£1", "50p", "20p", "10p", "5p", "2p", "1p"]
    const currencyValues = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

    let cash;

    // For loop to iterate through the currencyValues and divide the returnValue by each denomination. Math.floor rounds any value down to the nearest integer.
    for (let i = 0; i < currencyValues.length; i++) {
        cash = Math.floor(returnValue / currencyValues[i]);
        // If the result of this division is greater than 0, at least 1 of that denomination can be used.
        if (cash > 0) {
            // This maps the index of the currencyType to the index of the currencyValue
            change[currencyType[i]] = cash;
            // Update returnValue to the remainder so we can continue to iterate through the currencyValues
            returnValue = returnValue % currencyValues[i]
        }

    }

    return change;
}

console.log(calculateChange(17.87, 20.00)); // ==> { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(26.23, 40.00));
console.log(calculateChange(5.01, 10.00))