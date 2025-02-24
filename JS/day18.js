let studentsName = [
    "Zara",
    "Ahmed",
    "Ahmed",
    "Ahmed",
    "Ahmed",
    "Ahmed",
    "Ahmed",
    "Ahmed",
]



let studentBioData = {
    studentId: 45,
    studentName: "SANA",
    studentClass: 7,
    studentClass: {
        classSection: "A",
        floor: 3
    },
    studentHobies: ["Swimming", "Writing", "Coding"]
}

studentBioData.studentHobies.map((i) => console.log(i))





let mobilePhoneData = {
    sno: 1,
    phoneName: "iPhone 16",
    phonePrice: 450000,
    phoneLink: "https:wwww.google.com"
}

console.log(mobilePhoneData.phoneName)

const tableHeadings = Object.keys(mobilePhoneData)

const tableData = Object.values(mobilePhoneData)

tableData.map((i) => console.log(i))


tableHeadings.map((i) => console.log(i))






const employeeData = [
    {
        id: 1,
        name: "Talha",
        designation: "Manager",
        salary: 320000,
    },
    {
        id: 2,
        name: "Javeria",
        designation: "Full Stack Developer",
        salary: 270000
    },
    {
        id: 3,
        name: "Dawood",
        designation: "Android / iOS Developer",
        salary: 300000
    },
    {
        id: 4,
        name: "Haram",
        designation: "SQA",
        salary: 200000
    },
    {
        id: 5,
        name: "Farhan",
        designation: "Manager",
        salary: 200000
    }
]

employeeData.map((i) => console.log(`Salary: ${i.salary}`))




const managers =  employeeData.filter((i) => i.designation === "Manager")

const managerNames =  managers.map((i) => i.name)

managerNames.map(i => console.log(i))




