// if vs switch

// ---------------------------------------------------------------------------------------------------
// Example 1: if-else vs multiple if

var age = 5;

// if (age < 6) {
//     console.log("You might be in kindergarten")
// } else if (age < 18) {
//     console.log("You might be somwhere in primary, middle, high-school, apprenticeship or something similiar");
// } else if (age < 60) {
//     console.log("You might be working");
// } else {
//     console.log("You are close to retirement");
// }

// if (age < 6) {
//     console.log("You might be in kindergarten")
// } 

// if (age < 18) {
//     console.log("You might be somwhere in primary, middle, high-school, apprenticeship or something similiar");
// }

// if (age < 60) {
//     console.log("You might be working");
// }

// if (age >= 60) {
//     console.log("You are close to retirement");
// }

// ---------------------------------------------------------------------------------------------------
// Example 2: if vs switch


age = 1;

// this (above) can be rewritten as this below

switch (age) {
    case 0: { // is age === 0 ??
        console.log("Welcome to the world");
        break;
    }
    case 1: { // is age === 1 ??
        console.log("1st milestone! Congrats");
        break;
    }
    case 10: { // ...
        console.log("It's 10 yay!");
        break;
    }
    case 18: {
        console.log("Viel Spass!");
        break;
    }
    case 65: {
        console.log("Retirement time!")
        break;
    }
    default: {
        console.log("Not really much to say");
        break;
    }
}