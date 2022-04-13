"use strict";

// 1
// Create an object called darthVader with the keys allegiance, weapon and sith and the values of empire, lightsabre and true. Finally log darthVader
let darthVader = { allegiance: "Empire", weapon: "lightsabre", sith: true };
console.log(darthVader);

// 2
// Create the following log statements using the darthVader Object

//     Darth Vader's allegiance is to the Empire;
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);

//     Darth Vader's weapon of choice is a lightsabre;
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);

//     Darth Vader is a sith? true;
console.log(`Darth Vader is a sith? ${darthVader.sith}`);

//     Darth Vader is a Jedi? false;
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

// 3
// Create an array with the name myArray with 2 elements hello,everyone..
let myArray = ["hello", "everyone"];

//      Next print the length of the array
console.log(myArray.length);

//      Next use the push() method to add 3 elements to the array
myArray.push("how", "are", "you");

//      Next print the length of the array
console.log(myArray.length);

//      Next use shift() to remove an element
myArray.shift();

//      Finally print the contents of the array using a for of loop.
for (let eachElement of myArray) {
    console.log(eachElement);
}
