//IF ELSE


let marks = 79;

if (marks > 100) {
    console.log("Values must be less then 100")
} else if (marks <= 100 && marks >= 80) {
    console.log("A-ONE GRADE")
} else if (marks < 80 && marks >= 70) {
    console.log("A-GRADE")
} else if (marks < 70 && marks >= 60) {
    console.log("B")
} else {
    console.log("F GRADE")
}


//SWICTH CASES

let requestedItem = "Dew"

switch (requestedItem) {
    case "Pepsi":
        console.log("PEPSI")
        break;
    case "7up":
        console.log("PEPSI")
        break;
    case "Sprite":
        console.log("PEPSI")
        break;
    default:
        console.log("Item not available")
        break;
}





// LOOPS
// 1 - for loop
// 2 - while loop
// 3 - do while loop



// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


const tableNum = 15;

for(let i = 1; i <= 20; i++){
    console.log(`${tableNum} X ${i} = ${tableNum*i}`)
}

