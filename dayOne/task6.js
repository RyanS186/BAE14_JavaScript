/*
Write a function named capital_indexes. The function takes a single parameter, which is a string. Your function should return a list of all the indexes in the string that have capital letters.

For example, calling capital_indexes("HeLlO") should return the list [0, 2, 4].

split() function 
*/




function capitalIndexes(str) {
    let positions = [];
    for (i = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/) != null) {
            positions.push(i);
        }
    }
    console.log(positions);
}
str = "cAPitAlInDExeS"
capitalIndexes(str)

str = "CapITaLiNdeXEs"
capitalIndexes(str)