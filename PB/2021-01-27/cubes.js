

const cubes = function(a, b = null, c = null) {
    let result = Math.pow(a, 3);

    if (b) result += Math.pow(b, 3)

    if (c) result += Math.pow(c, 3)

    return result;
}


// console.log(cubes(2));
// console.log(cubes(2, 2));
// console.log(cubes(2, 2, 2));

const cubes2 = function(...nums) {
    console.log(nums);
    var result = 0;
    
    for (var num of nums) {
        result += Math.pow(num, 3);
    }

    return result;
}

console.log(cubes2());
console.log(cubes2(2));
console.log(cubes2(2, 2));
console.log(cubes2(2, 2, 2));
console.log(cubes2(2, 2, 2, 2));