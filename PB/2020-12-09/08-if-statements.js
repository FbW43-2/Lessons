
var person1 = {
    first_name: "Luke",
    last_name: "Hermann",
    has_beard: true,
    job_status: {
        is_student: false,
        profession: "Woodcutter"
    },
    age: 31,
    test_results: [7, 3, 4]
}

var person2 = {
    first_name: "Bobby",
    last_name: "Solo",
    has_beard: true,
    job_status: {
        is_student: true,
        profession: null
    },
    age: 17,
    test_results: [8, 9, 5]
}

var person3 = {
    first_name: "Giulia",
    last_name: "Giulietti",
    has_beard: false,
    job_status: {
        is_student: false,
        profession: "Executive Producer"
    },
    age: 24,
    test_results: [4, 3, 2]
}






var person = person1;
/* 
Algorithm 1
==================================

If the person job is woodcutter, and has had at least a grade 5* in school (no matter if it's still studying or not),
then tell us wheteher or not they have a beard, and also tell us their best test result (only if they are still studying).

If not, then just print the person last name.

* grades go from 0 to 10

*/


if (person.job_status.profession.toLowerCase() === "woodcutter" && person.test_results.indexOf(5) >= 0) {
    console.log(person.has_beard);

    if (person.job_status.is_student) {
        console.log(Math.max(person.test_results));
    }
} else {
    console.log(person.last_name);
}

// === 

if (person.job_status.profession.toLowerCase() === "woodcutter") {
    if (person.test_results.indexOf(5) >= 0) {
        console.log(person.has_beard);

        if (person.job_status.is_student) {
            console.log(Math.max(person.test_results));
        }
    }
} else {
    console.log(person.last_name);
}