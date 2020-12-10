// -----------------------------------------------------------------
// DEFINITIONS: here we declare variables, constants, functions, ...

const DAYS_OF_THE_WEEK = 7;

const PROFESSIONS = ["web-dev", "gardener", "bridge-builder"]; // only the web dev works during the weekend
const PROFESSION = PROFESSIONS[1];

function isWeekendDay(day) { // Step 5: run the isWeekendDay function
    /**
     * day      (day === 6)     (day === 7)         ||       
     * 1        false           false               false
     * 2        false           false               false
     * 3        false           false               false
     * 4        false           false               false
     * 5        false           false               false
     * 6        true            false               true
     * 7        false           true                true
     */
    return (day === 6) || (day === 7); // Step 6: evaluate the two conditions (see table above) and return a boolean result
}

function isWorkDay(day) { // Step 3: run the isWorkDay function
    // Step 4: call the isWeekendDay function
    return ! isWeekendDay(day); // Step 7: retrieve the result, negate it, and return it out of the isWorkDay function
}
// -----------------------------------------------------------------
// EXECUTION: here the code is executed and functions are called, ...

// 1) Start here
for (var i = 1; i <= DAYS_OF_THE_WEEK; i++) {
    
    if (isWorkDay(i)) { // Step 2: call the isWorkDay function // Step 8: retrieve the result of the isWorkDay function
        // Step 8.1: ....
        console.log("Oh nooo I have to work")
    } else { // it's weekend
        // Step 8.2: ....
        if (PROFESSION === "web-dev") {
            console.log("It's weekend but I still have to work");
        } else {
            console.log("I can relax");
        }
    }

}
// -----------------------------------------------------------------