// JavaScript != Java
// JavaScript at first may resemble Java, but they are different
// It can be used through the browser, inline, and externally

// There are 4 types of console output
console.log('Hello World!')
console.info('Hello World!')
console.warn('Hello World!')
console.error('Hello World!')

// VARIABLES

// The scope of var isn't ideal
// A CONSTant cannot be changed
// LET can be updated further down the line
var dogName = "Pilgrim"
const fName = "Jess "
let sName = "Carter"

console.log(fName + sName)

//String

sName = "Sharp"

console.log(fName + sName)

// Java = byte, short, int, long, float, double
// JS = number

let age = 26
let salary = 20000

// Arrays
let myArray = [10, 12, 13, "Hello"]

// In Java, the basic array could only take in one data type
// ArrayList could only take in one object type
// JS burns the book and says anything can be part of the Array, and they are mutable

console.log(myArray[0])
console.log(myArray[4])

myArray[4] = 15

console.log(myArray[4])

// Boolean - they are switches

let trueOrFalse = true

// JS DATA TYPES

let jsDataTypes = ["Boolean", "Number", "BigInt", "String", "Object", "Array", "undefined", "null", "Symbol"]
console.log(jsDataTypes)


// UNDEFINED variables have never been initialised
// NULL is an explicit keyword that tells the runtime it is ‘empty’


// String Concat

// string + number == concat
let str = "10 + 10" + 10 + 10

console.log(str)

// If we include brackets, it treats the sum as a number first, before concatenating
str = "10 + 10" + (10 + 10)

console.log(str)

// str += is a shorthand way of typing str = str + ____
str += " Text"

console.log(str)

// Literals - backticks `` take us out of JavaScript, $ exits the literal and enters JavaScript

const literalStuff = `My surname is ${sName}`

console.log(literalStuff)

// camelCase

let camelCase = "lookLikeThis"

// modifyMe - An array to show off four methods
// Push and Pop - Stack - Adding/removing a variable from the end of an array
// Shift and Unshift - Remove/Add from the start of a list

let modifyMe = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(modifyMe)

const removedLastNum = modifyMe.pop()
console.log(modifyMe)

modifyMe.push(removedLastNum, 10)
console.log(modifyMe)

const removedFirstNum = modifyMe.shift()
console.log(modifyMe)

modifyMe.unshift(0, removedFirstNum)
console.log(modifyMe)

// If Statements
// (boolean) - JS will assume the statement is read like 
// (boolean === true)

// (!boolean) will be read like
// (boolean === false)

let booHoo = true
let booHooMan = true
let asosFanBoy = "Samuel"

if (booHoo && booHooMan) {
    console.log("BooHoo is for you")
} else if (asosFanBoy === "Samuel") {
    console.log("I like both")
} else {
    console.log("I like ASOS anyway")
}

let golfScore = ["Hole in one", "Albatross", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey"]

let par = 5
let strokes = 7

// A function is a script telling JavaScript to do an order of operations

function golfGame(strokes, par) {
    if (strokes === 1) {
        console.log(golfScore[0])
    } else if (strokes === par - 3) {
        console.log(golfScore[1])
    } else if (strokes === par - 2) {
        console.log(golfScore[2])
    } else if (strokes === par - 1) {
        console.log(golfScore[3])
    } else if (strokes === par) {
        console.log(golfScore[4])
    } else if (strokes === par + 1) {
        console.log(golfScore[5])
    } else if (strokes === par + 2) {
        console.log(golfScore[6])
    } else {
        console.log("retire")
    }
}

golfGame(4, 5)