//ARRAYS

// let std1 = "Moiz"
// let std2 = "Zafar"
// let std3 = "Zara"

// let studentsName = ["Ali", "Zohaib", "Jawad"]

// console.log(studentsName.length)

// for (let i = 0; i <= studentsName.length - 1; i++) {
//     console.log(studentsName[i])
// }

const fruitsNames = [
    "Mango",
    "Banana",
]

for (let i = 0; i <= fruitsNames.length - 1; i++) {
    var fruits = fruitsNames[i]
    console.log(fruits)
}

console.log(fruitsNames.includes("Mango"))

if (fruitsNames.includes("Mango") && fruitsNames.includes("Banana")) {
    console.log("Summer")
} else {

    console.log("   Winter")
}