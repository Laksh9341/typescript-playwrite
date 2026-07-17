let a =10
let b = 20
let c = a+b
//console.log(c)

function checkOddEven(num: number): void {
    if (num % 2 === 0) {
        console.log("Even")
    } else {
        console.log("odd")
    }
}
checkOddEven(a)

function greaterNumber(a: number, b: number){
    let result = "";
    if (a > b) {
        result = "a is greater"
    } else {
        result = "b is greater"
    }
    console.log(result)
}

greaterNumber(100, 200)