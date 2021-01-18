
/*
Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
Example:
countOccurrences("this is a string", "i") ➞ 3
*/

// Step 1: create a function
// Step 2: arguments
// Step 3: validation of the arguments
//          - make sure both are strings (remember that char is a string)
//          - a char needs to be of length 1
// Step 4: define the return type/value
// Step 5: iterate over the string
// Step 6: if the string-char matches the input, then increase the ouccrences count


function isString(arg) {
    return typeof arg === 'string';
}

/**
 * Count how many times a characther (passed as the second argument) appears in a string (first argument).
 * Please note that the function is case-sensitive. This means that, for example, if you pass "f" as second paramer, it would not be counted as "F".
 * 
 * @param {String} str the string in which we want to count the occurences
 * @param {String} ch the characther to count 
 * 
 * @throws error, if either parameter is not a string, or the char (second parameter) is longer than 1
 * 
 * @returns the number of occurences of ch in str
 */
function countOccurrences(str, ch) {
    if (!isString(str) || !isString(ch)) 
        throw Error("The parameter needs to be of type string")

    if (ch.length !== 1)
        throw Error("The char needs to be of length 1")

    let occurrences = 0;

    for (let c of str) { // shorthand for (let i = 0; i < str.length; i++) { let c = str[i]; ... }
        if (c === ch) occurrences++;
    }

    return occurrences;
}

console.log(countOccurrences("False", "f", false));    // 1
// console.log(countOccurrences("falseff", "f"));  // 3
// console.log(countOccurrences("true", ""));      // Error
// console.log(countOccurrences("Random String", "r")); // 2, 1
// console.log(countOccurrences(true, "r"));       // 1, Error()

console.log(countOccurrences("Abdullah-llL", "g"));