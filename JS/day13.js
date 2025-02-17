//CONDITIONAL STATEMENTS

let userAge = 8;

if (userAge >= 18) {
    console.log("User age is " + userAge + ", and user is eligible")
} else {
    console.log("User age is " + userAge + " and user is not eligible")
}



// NESTED ELIF

let userMarks = 0;

if (userMarks > 100) {
    console.log("error")
}
else if (userMarks >= 100) {
    console.log("User marks are " + userMarks + " and user got A-ONE")
}
else if (userMarks >= 80) {
    console.log("User marks are " + userMarks + " and user got A-GRADE")
} else if (userMarks >= 70) {
    console.log("User marks are " + userMarks + " and user got B+")
} else if (userMarks >= 60) {
    console.log("User marks are " + userMarks + " and user got C")
} else if (userMarks >= 50) {
    console.log("User marks are " + userMarks + " and user got D")
} else {
    console.log("User marks are " + userMarks + " and user got F")
}




let temperature = 0;

if (temperature > 40) {
    console.log(`Temperature is ${temperature}. VERY HOT`)
} else if (temperature <= 40) {
    console.log(`Temperature is ${temperature}. HOT`)
} else {
    console.log("VERY COLD")
}
