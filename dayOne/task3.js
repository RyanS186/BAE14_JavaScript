function myFunc(a, b) {
    return a - b
}
console.log(myFunc(18, 6))

function welcome(name, age, gender) {
    return console.log(`My name is ${name}, I'm ${age} and I am a ${gender}`)
}
welcome("Ryan Sharp", 26, "Male")

// Arrow Functions omit the function keyword
/*
hello = () => {
    return "Hello World!"
}
*/
// We can make them even shorter if they only have one statement, and the statement returns a value. If this is the case, we can remove the brackets and the return keyword.

powerUp = (n1, n2) => console.log(Math.pow(n1, n2));
// Once a function is defined, we can call it multiple times with different values
powerUp(15, 2)
powerUp(2, 3)