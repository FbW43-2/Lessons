
function nonUniqueValues(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        var el = arr[i];
        if (arr.indexOf(el) === arr.lastIndexOf(el)) {
            arr2.push(el);
        }
    }
    return arr2;
}

console.log(nonUniqueValues([1, 1, 1, 2, 2, 2, 3, 4]));

// this comes from google
const filter_Non_Unique = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));


// The Array.filter() method creates a new array with all elements that pass the test implemented by the provided function.

// step 0
function nonUniqueValues0(arr) {
    function filterFunction(el) {
        return arr.indexOf(el) === arr.lastIndexOf(el)
    }
    var arr2 = arr.filter(filterFunction);
    return arr2;
}

// step 1
function nonUniqueValues1(arr) {
    var arr2 = arr.filter(function filterFunction(el) {
        return arr.indexOf(el) === arr.lastIndexOf(el)
    });
    return arr2;
}
// step 2
function nonUniqueValues2(arr) {
    return arr.filter(function filterFunction(el) {
        return arr.indexOf(el) === arr.lastIndexOf(el)
    });
}

// step 3
function nonUniqueValues3(arr) {
    return arr.filter((el) => {
        return arr.indexOf(el) === arr.lastIndexOf(el)
    });
}

// step 4
function nonUniqueValues4(arr) {
    return arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));
}

// step 5
const nonUniqueValues5 = (arr) => {
    return arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));
}

// step 6
const nonUniqueValues6 = (arr) => arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));

console.log(nonUniqueValues6([1, 1, 1, 2, 2, 2, 3, 4]));