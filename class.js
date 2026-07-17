"use strict";
class GreaterValue {
    greaterNumber(a, b) {
        let result = "";
        if (a > b) {
            result = "a is greater";
        }
        else {
            result = "b is greater";
        }
        return result;
    }
}
const obj = new GreaterValue();
console.log(obj.greaterNumber(200, 450));
