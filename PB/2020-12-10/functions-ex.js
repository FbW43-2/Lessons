

// keyword "function", name of the function, (list of parameters, if any), { ... }
function printDay(dayOfTheWeek, month) {
    console.log(`Today is the ${dayOfTheWeek} of the month ${month}`);
    return month;
}

var day = 2;
var month = printDay(day, "December");
console.log(month);


day = 5;
printDay(day, "January");

day = 1;
printDay(day, "February");

day = 9;
printDay(day, "March");

function printHi(index) {
    console.log("Hi " + index);
}

// for (var i = 0; i < 1_000; i++) {
//     printHi(100 - i);
// }

function sum(num1, num2) {
    return num1 + num2;
}


if (sum(4, 10) === 14) {

}
