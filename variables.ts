//Daily Task 1
let studentName: string = "Lakshmanan"  // Declared the varialbe and assigned the name 
console.log("Task 1")
console.log(studentName) // printing the value


//Daily Task 2
console.log("Task 2")
let rollNumber: number = 12345  // Declared the variable and assigned the roll number
console.log(rollNumber) // printing the value


//Daily Task 3
console.log("Task 3")
let isPassed: boolean = true // Declared the variable and assigned the value
console.log(isPassed) // printing the value

//Daily Task 4
console.log("Task 4")
let userData: any = "Lakshmanan"
console.log(userData) // printing the string value

userData = 12345
console.log(userData) // printing the number value

userData =  true
console.log(userData) // printing the boolean value


//Daily Task 5
console.log("Task 5")
let inputValue: unknown = "Lakshmanan"
if (typeof inputValue === "string") {
    console.log(inputValue) // printing the string value
}


//Daily Task 6
console.log("Task 6")
let middleName: null = null
console.log(middleName) // printing the null value


//Daily Task 7
console.log("Task 7")
let address: undefined = undefined
console.log(address) // printing the undefined value

//Daily Task 8
console.log("Task 8")
enum Department {
    HR,
    IT,
    Finance
}
let dep = Department.IT
console.log(dep)

//Daily Task 9
console.log("Task 9")
let employeeCode: string | number

employeeCode = 7890
console.log(employeeCode)

employeeCode = "EMP001"
console.log(employeeCode)


//Daily Task 10
console.log("Task 10")
type Employee = {
    id : number;
    name : string;
    salary : number;
};

let emp : Employee = {
    id : 123,
    name : "Lakshmanan",
    salary : 5000,
};

console.log(emp)