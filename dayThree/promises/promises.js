'use strict'
// Callbacks are essentially functions that take in another function as a parameter

// const helloSir = (name) => {
//     alert("Hello Sir " + name);
//     return name;
// }

// const saveUsername = (callback) => {
//     let username = prompt("Please enter a name");
//     callback(username);
//     console.log("Finished")
// }

// saveUsername(helloSir("Ryan"))

// Promises
/*
A promise is a placeholder for some data that is available immediately, some time in the future, or never

When data is needed and is not potentially available straight away we may wait for the data to come through, but we also need a way to execute code when data is available or deal with the fact it never will be
*/

// A promise can be in one of three states:
    // Pending - Hasn't been fulfilled or rejected yet
    // Fulfilled/Successs - the action relating to the promise succeeded
    // Rejected/Failed - the action relating to the promise failed

// Catch -- if / when an error happens how do we handle it


// There are two further methods that can be used in conjuction with promises for further functionality.
    // .then() - if successful, what should happen next
    // .catch() - if failed, what should happen next

// Callback
// A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

//Why do we need callbacks
// JavaScript is an event driven language. This means it will keep executing while listening for events as opposed to waiting for a resposne before moving on.

let prom = new Promise((resolve, reject) => {
    let theNumberTen = 5 + 5;
    if (theNumberTen === 10) {
        resolve(console.log("Success"));
    } else {
        reject(console.log("Fail"))
    }
})

// // We then pass the value from the resolve or reject and we set it to message

//     // .then() is executed if successful
// prom.then((message)=>{
//     console.log(`This is in the then block and the status is: ${message}`);
//     //.catch() is executed if failed
// }).catch((message)=>{
//     console.log(`This is in the catch block and the status is: ${message}`);
//     //.then() can be chained and will execute regardless of the outcome
// }).then(()=>{
//     console.log("I will take place regardless of what happened before");
// })

// const greeting = (name) => {
//     // Creates an alert which says hello and appends the value of the variable `name`
//     alert(`Hello ${name}`);
// }

// const processUserInput = (callback) => {
//     //A simple user input box appears on the browser that takes a value and assigns it to `name`
//     let name = prompt('Please enter your name.');

//     // Then pass the variable `name` to the callback function as a parameter
//     callback(name);
// }

// Call the function `processUserInput()` and then pass `greeting` as a parameter
// processUserInput(greeting);

// EXERCISE

// Create a callback function that asks a user to enter a value, then increases it by 10 through another function.

const plusTen = (val) => {
    alert(`${val} + 10 = ${val + 10}`);
}

const userNumber = (newVal) => {
    let userInput = parseInt(prompt('Please enter a number:'));
    newVal(userInput)
}

userNumber(plusTen);

// Asynchronous Programming
