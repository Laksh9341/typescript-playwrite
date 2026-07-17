class GreaterValue {
    constructor(a: number, b:number) {
        this.a = a;
        this.b = b;
    }
    greaterNumber(){
        let result = "";
        if (this.a > this.b) {
            result = "a is greater"
        } else {
            result = "b is greater"
        }
            return result;    
    }
}

const obj = new GreaterValue(200,450);
//console.log(obj.greaterNumber(200,450))