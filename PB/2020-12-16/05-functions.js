

var people = [
    {
        first_name: "Goerg",
        last_name: "Last",
        age: 34
    },
    {
        first_name: "Anja",
        last_name: "Last",
        age: 14
    },
    {
        first_name: "Philipp",
        last_name: "Last",
        age: 76
    },
    {
        first_name: "Lucilla",
        last_name: "Last",
        age: 71
    },
    {
        first_name: "Genny",
        last_name: "Last",
        age: 4
    }
];


function isRetired(p) {
    return p.age >= 75;
}

function isInKinderGarten(p) {
    return p.age <= 6;
}


for (var i = 0; i < people.length; i++) {
    var person = people[i];

    if (isRetired(person)) {
        console.log(`${person.first_name} is retired`);
    } else if (isInKinderGarten(person)) {
        console.log(`${person.first_name} is in kindergarten`);
    }
}