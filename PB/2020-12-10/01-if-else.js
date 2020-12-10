/**
 * December start from the 1st and ends on 31st
 *
 * What do I do in December?
 *  
 * - from the 3rd to the 8th                I go to school
 * - from the 13th to the 15th              I get drunk on Javascript
 * - from the 23rd to the 27th              I'm in Lepizig visit my cousins for Christmas 
 * 
 * 
 * The rest of the days: I sleep
 */

const DAYS_IN_DECEMBER = 31
var totalDays = 0;

function getOrdinalIndicator() {
    
}




function numberEndsWith1(num) {
    return num % 10 === 1;
}

function numberEndsWith2(number) {
    return number % 10 === 2;
}

function numberEndsWith11(number) {
    return number % 100 === 11;
}

function numberEndsWith12(number) {
    return number % 100 === 12;
}

function numberEndsWith3(number) {
    return number % 10 === 3;
}

function numberEndsWith13(number) {
    return number % 100 === 13;
}

function getOrdinalIndicator(day) {
    
}

// for loop syntax: for(<starting index>, <stop condition>, <incremental step>)

for (var index = 1; index <= DAYS_IN_DECEMBER; index++) {
    var ordinalIndicator;

    if (numberEndsWith1(index)) {

        if (numberEndsWith11(index))
            ordinalIndicator = index + 'th';
        else 
            ordinalIndicator = index + 'st';

    } else if (numberEndsWith2(index)) {

        if (numberEndsWith12(index))
            ordinalIndicator = index + 'th';
        else
            ordinalIndicator = index + 'nd';

    } else if (numberEndsWith3(index)) {

        if (numberEndsWith13(index))
            ordinalIndicator = index + 'th';
        else
            ordinalIndicator = index + 'rd';

    } else {
        ordinalIndicator = index + 'th';
    }

    var action;

    if (index >= 3 && index <= 8) { // from the 3rd to the 8th, I go to school
        action = "I go to school";
    } else if (index >= 13 && index <= 15 ) { // from the 13th to the 15th, I get drunk on Javascript
        action = "I get drunk on javascript";
    } else if (index >= 23 && index <= 27) { // 23rd to the 27th, I'm in Lepizig visit my cousins for Christmas
        action = "I'm in Lepizig visit my cousins for Christmas"
    } else {
        action = "I sleep";
    }

    console.log(`Today is December, the ${ordinalIndicator} of the year 2020. Today, ${action}`);
}


// for (var index = 1; index <= DAYS_IN_DECEMBER; index++) {
//     var result = numberEndsWith1(index);

//     console.log(`Does number ${index} end with 1? ${result}`);
// }

// Method 1: mathematical way
// Ex 1: 6662712721 % 10 = 1
// Ex 2: 89127312755 % 10 = 5
// Ex 3: 4 % 10 = 4
// index % 10

// Method 2: string/array way 
// Ex 1: 1235 -> '1235' -> ['1', '2', '3', '5'] -> '5' -> 5
// Ex 2: 5 -> '5' -> ['5'] -> '5' -> 5
// parseInt(index.toString().split('').pop())

// Method 3: string way 1235 -> '1235' -> '5' -> 5
// parseInt(index.toString().charAt(-1))
