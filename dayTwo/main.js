// Objects

// Data Types
// Number
// BigInt
// String
// Object
// Boolean
// Null
// Array
// NaN
// undefined

// Object is essentially in this JSON form
// An object can be defined as an unordered collection of related data, of primitive or reference types in the form of key:value pairs.
// An object is a reference data type

// Arrays hold a set of related data, for example, students in a class
// Arrays in JS have some idiosyncrasies:
// They can be resized at any time
// They index at 0
// Array[3] would have elements with indexes 0, 1 and 2
// They can be sparsely filled
// Unassigned parts of an array are undefined
// They can be created in shrot hand using just square brackets

// JSON -- JavaScript Object Notation
// Link frontend to backend -- API - Application Programming Interface
// Lightweight data-interchange format:
// Compared to XML
// Simple format
// Easy for humans to read/write
// Easy for machiens to parse/generate
// JSON is a text format
// Programming language independent
// Conventions familiar to programmers of the C-family of languages, including C# and JavaScript

// There are 2 ways to create a new object:

let toyotaCar = new Object();

let hyundaiCar = {};

console.log(toyotaCar)
console.log(hyundaiCar)

let ryanCar = {
    // It's also possible to nest an object within an object
    // car: {
    make: "Vauxhall",
    model: "Corsa",
    year: 2009,
    colour: "Grey",
    // }
}

console.log(ryanCar) //shows all attributes

// We have 2 options for printing specific values within the object
// Dot notation
// Bracket notation

console.log(ryanCar.colour) // shows the value of the colour

// For bracket notation, you have to give the value as a string - This means it's important to match the case

console.log(ryanCar["colour"]) // also shows the value of the colour

// We can reassign values at any time
ryanCar.make = "Tesla"
ryanCar.model = "Model Y"
ryanCar.year = 2022
ryanCar.colour = "Deep Blue Metallic"

// We can also add new key:value pairs
ryanCar.range = "331 Miles"


console.log(ryanCar)

// We can use literal notation to create complex arrays of object

let carPark = [
    { make: "Audi", model: "A5", carReg: "AB12 CDE" },
    { make: "Hyundair", model: "i30", carReg: "AB11 CDE" }
]

console.log(carPark)

// We can loop through an array of objects
for (let i = 0; i < carPark.length; i++) {
    for (let key in carPark[i]) {
        console.log(`${key} : ${carPark[i][key]}`);
    }
}
// Or
for (let obj in carPark) {
    for (let key in carPark[obj]) {
        console.log(`${key}: ${carPark[obj][key]}`)
    }
}

// ARRAYS
// We have a few different ways of creating arrays
let a = Array(); // An empty array called a
let b = Array(10); // An array containing 10 empty spaces called b
let c = Array("Tom", "Dick", "Harry") // An array containing 3 elements called c

// We can also use shorthand to create arrays
let cShortHand = ["Tom", "Dick", "Harry"]
let d = ["apple", "strawberries", "banana", "grapes", "pear"];

// How to access arrays
let classRoom = ["", "", "", ""];
classRoom[0] = "John";
classRoom[3] = "Simran"

console.log(classRoom[0])
console.log(classRoom[2])
console.log(classRoom[3])

// How to loop through arrays
for (let i = 0; i < classRoom.length; i++) {
    console.log(classRoom[i]);
}
// Or
for (let person of classRoom) {
    console.log(person);
}

// Array Object Methods
// Methods can be used in order to carry out certain functions

// sort() - Sorts the array using string comparisons by default
// reverse() - Reverses the elements in an array
// join() - Joins all the elements of the array into one string, using the supplied separator or a comma

console.log(d);
console.log(d.sort());
console.log(d.reverse());
console.log(d.join());

e = d.join("-")
console.log(e)

// push() - Adds a new element to the end of an array
// pop() - Removes the last element from an array

console.log(d.push("lemon"));
console.log(d);
console.log(d.pop);
console.log(d);

// unshift() - Adds a new element to the beginning of an array
// shift() - Removes the first element from an array

console.log(d.unshift("Kiwi"));
console.log(d);
console.log(d.shift());
console.log(d);

let myArray = [1, 2, 3, 4]; // Declare a new array
// Create a temp variable called "eachElement"
// Iterate though "myArray" starting at index 0
// Finally log the value of "eachElement"
for (let eachElement of myArray) {
    console.log(eachElement);
}

// How to JSON objects

// JSON is a subset of the object literal notation of JavaScript.
// It can be used in the JS language with no problems.

// A collection of key:value pairs
// Realised as an object (associative array)
// An ordered list of values
// Realised as an array

// JSON Object
// Unordered set of key:value pairs
// Begins with a left brace { and ends with right brace }
// Each name followed by a colon :
// Key:Value pairs separated by a comma ,

let myJSONObject = {
    "searchResults": [
        {
            "productName": "Aniseed Syrup",
            "unitPrice": 10
        },
        {
            "productName": "Alice Mutton",
            "unitPrice": 39
        }
    ]
};

// The parse method takes a string and parses it into JavaScript objects

let obj = JSON.parse('{"name":"Adrian"}');
console.log(obj.name);
// The stringify method takes JS objects and returns a string
let str = JSON.stringify({ name: "John" });
console.log(str);

//

let massiveJSON = {
    "smallerJSON": {
        "students": [{
            "name": "Ryan",
            "dob": "18/06/1995",
            "location": "Langford"
        }, {
            "name": "Tom",
            "dob": "23/07/1996",
            "location": "Weston-super-Mare"
        }, {
            "name": "Dylan",
            "dob": "26/05/1995",
            "location": "Bristol"
        }]
    }
}

console.log(massiveJSON);

let getRyan = JSON.stringify(massiveJSON.smallerJSON.students[0]);
console.log(getRyan);

let getTom = JSON.stringify(massiveJSON.smallerJSON.students[1]);
console.log(getTom);

let getDylan = JSON.stringify(massiveJSON.smallerJSON.students.filter(e => e.name == "Dylan"));
console.log(getDylan);

// CONDITIONALS

// JavaScript variables are loosely / dynamically typed; therefore the language doesn't care how a value is declared nor changed.
// Each value has an inherant boolean value, generally known as either truthy or falsey

// All values are TRUTHY unless they are defined as FALSEY

// These variables are always FALSEY
// false
// 0
// '' or ""
// undefined
// null
// NaN

//Everything else is TRUTHY
// '0' (string containing single digit 0)
// 'false' (string containing text - 'false')
// [] (an empty array)
// {} (an empty object)
// function(){} (an 'empty' function)

// IF - Statement

// let now = new Date();
// let greeting = "Good";
// if (now.getHours() > 17) {
//     greeting += " evening.";
// } else {
//     greeting += " day.";
// }

// We can use ternary to make this more concise

let now = new Date();
let greeting = "Good" + (now.getHours() > 17 ? " evening." : " day.");

console.log(greeting);

// Checking for equality and type

// Types in a type insensitive language can be interesting
// Seemingly different values can equate to true when using the == operator, for example:
// 1 == "1"; // returns true
// 1 == [1]; // returns true
// "1" == [1]; // returns true

// This is because JavaScript converts each string representation before comparison - only values are checked
// To get an obvious false result we can use the strictly equal operator '===' in this case the type and the value are both checked
// 1 == "1"; // returns false
// 1 == [1]; // returns false
// "1" == [1]; // returns false

// Hoisting -- is good, but not ideal in every circumstance

// Anonymous functions
// Declared like constants

// divide(12,6) // Due to using strict mode, this divide will throw an exception due to being called before it is defined

const divide = (a, b) => {
    console.log(a / b)
}
divide(10, 2)

// Arrow functions

const multiply = (a, b) => console.log(a * b)
multiply(15, 5)

const addition = (a, b) => console.log(a + b)
addition(10, 44)

const subtract = (a, b) => console.log(a - b)
subtract(54, 9)

// The main consideration is function declarations (functions with a name) vs function expressions (no name/anonymous).
 
// Declaration
// function myFunction() {}

// Expression
// const myFunction = function() {}

 
// ES6 friendly expression:
// const myFunction = () => {}

// Function declarations are hoisted, function expressions are not. Basically, it boils down to the idea of polluting (over using) what we call the 'Global scope' which is where things get hoisted to, to be accessed from anywhere.
// You shouldn't need hoisting to help your program function if you write in a structured, well designed way.
// So in most cases function expressions are preferred now.