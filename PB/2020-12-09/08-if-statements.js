
var people = [{
    first_name: "Luke",
    last_name: "Hermann",
    has_beard: true,
    job_status: {
        is_student: true,
        profession: "Woodcutter"
    },
    age: 31,
    test_results: [7, 3, 5]
}, {
    first_name: "Bobby",
    last_name: "Solo",
    has_beard: true,
    job_status: {
        is_student: true,
        profession: null
    },
    age: 17,
    test_results: [8, 9, 5]
}, {
    first_name: "Giulia",
    last_name: "Giulietti",
    has_beard: false,
    job_status: {
        is_student: false,
        profession: "Executive Producer"
    },
    age: 24,
    test_results: [4, 3, 2]
}]


/* 
Algorithm 1
==================================

If the person job is woodcutter, and has had at least a grade 5* in school (no matter if it's still studying or not),
then tell us wheteher or not they have a beard.

If not, then just print the person last name.

* grades go from 0 to 10

*/


if ((person.job_status.profession !== null && person.job_status.profession.toLowerCase() === "woodcutter")) {
    if (person.test_results.indexOf(5) >= 0) {
        console.log(person.has_beard);

        if (person.job_status.is_student) {
            console.log(Math.max(person.test_results));
        }
    }
} else {
    console.log(person.last_name);
}

/* 
Algorithm 2
==================================

If the person's job is woodcutter or he's a student that has at least a grade 5 in the last two tests,
make sure he has not beard.
If he doesn't then print his last grade and age (if the age is less than 43)
Otherwise, print his first name, and if his last name is longer than 6 chars, then also print his last name.

If he's no woodcutter and the grade condition is not respected, then just print whether he/she has a beard or not.

* grades go from 0 to 10s
*/

if (person.job_status.profession.toLowerCase() === "woodcutter" || (person.job_status.is_student && (person.test_results[2] >= 5 || person.test_results[1] >= 5) ) ) {
    if ( ! person.has_beard) {
        console.log(person.test_results[2]);

        if (person.age < 43) 
            console.log(person.age);

    } else {
        // option 1 -------------------
        var nameToPrint = person.first_name;

        if (nameToPrint.last_name.length > 6)
            nameToPrint += " " + person.last_name;

        console.log(nameToPrint);

        // option 2 -------------------
        if (person.last_name.length <= 6)
            console.log(person.first_name)
        else
            console.log(person.first_name + " " + person.last_name);

    }

} else {
    console.log(person.has_beard);
}