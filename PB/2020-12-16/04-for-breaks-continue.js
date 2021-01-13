// loop 0
// console.log("Start loop 0");

// for (var i = 0; i < 10; i++) {
//     var result = 10 - i;
// }

// console.log("End loop 0");


const LIMIT = 4;

// loop 1: break
console.log("Start loop 1");

for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i === LIMIT) break;
}

console.log("End 1");


// loop 2: break
console.log("Start loop 2");

for (var i = 0; i < 10; i++) {
    if (i === LIMIT) break;
    console.log(i);
}

console.log("End loop 2");

// loop 3: continue
console.log("Start loop 3");

for (var i = 0; i < 10; i++) {
    if (i === LIMIT) continue;
    console.log(i);
}

console.log("End loop 3");


// loop 4: continue
// console.log("Start loop 4");

// for (var i = 0; i < 10; i++) {
//     console.log(i);    
//     if (i === LIMIT) continue;

// }

// console.log("End loop 4");