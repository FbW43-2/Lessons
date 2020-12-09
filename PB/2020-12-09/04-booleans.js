
// 1: Boolean operator AND -> && 

var x; // boolean
var y; // boolean

console.log("Result of AND operation: x && y")

x = y = false;
console.log(`1) x = false, y = false -> ${x && y}`);

x = false;
y = true;
console.log(`2) x = false, y = true -> ${x && y}`);

x = true;
y = false;
console.log(`3) x = true, y = false -> ${x && y}`);

x = y = true;
console.log(`4) x = true, y = true -> ${x && y}`);

// 2: Boolean operator OR -> ||

console.log("Result of OR operation: x || y")

x = y = false;
console.log(`1) x = false, y = false -> ${x || y}`);

x = false;
y = true;
console.log(`2) x = false, y = true -> ${x || y}`);

x = true;
y = false;
console.log(`3) x = true, y = false -> ${x || y}`);

x = y = true;
console.log(`4) x = true, y = true -> ${x || y}`);



// var studentId = 123;
// var student = getStudentbyIdFromDatabase(studentId);

/*
    Fictional scenario: 

    student.test1.grade = 4
    student.test2.grade = 8

    (student.test1.grade > 6) --> (4 > 6) --> false
    (student.test2.grade > 6) --> (8 > 6) --> true

    false && true --> false
    false || true --> true

*/
// if (student.test1.grade > 6 || student.test2.grade > 6) {
//     passStudent(studentId)
// } else {
//     resubmitTestToStudent(studentId);
// }

// https://github.com/denysdovhan/wtfjs
// https://stackoverflow.com/a/359509/8524301
console.log("\n\nSome javascript boolean operation");
console.log(`true && false: ${true && false}`);
console.log(`true || false: ${true || false}`);
console.log(`true || null: ${true || null}`); // null is evaluated as false ??
console.log(`null || null: ${null || null}`);
console.log(`null || false: ${null || false}`);
console.log(`null && null: ${null && null}`);
console.log(`true && null: ${true && null}`);
console.log(`[] == ![]: ${[] == ![]}`);
console.log(`undefined || false: ${undefined || false}`);
console.log(`undefined && false: ${undefined && false}`);
console.log(`true && '': ${true && ''}`);
console.log(`undefined || null: ${undefined || null}`);