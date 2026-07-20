import {test, expect} from '@playwright/test';

test('test 1', async() => {
    console.log('My First test case');
});

test('test 2', async() => {
    let a = 10
    let b = 20
    if (a>b) {
        console.log('a is greater than b');
    }else {
        console.log('b is greater than a');
    }
});

test('test 3', async() => {
expect(3).toBe(3);
});

test('test 4', async() => {
    expect('abc'.length).toBe(3);
});


function isEven(num: number) {
    if (num%2 == 0) {
        return true;
    }else {
        return false;
    }
}

test('test 5', async() => {
    const a = 11;
    expect(isEven(a)).toBe(false);
})

// Test 6
function add(a: number, b: number) {
    return a + b;
}
test('Add function test', async() => {
    const a = 10;
    const b = 20;
    expect(add(a, b)).toBe(30);
});

//Test 7

function getLength(str: string) {
    return str.length;  
}

test('Get length of string', async() => {
    const str = 'Hello World';
    expect(getLength(str)).toBe(11);
});

// Test 8
function reverseString(str: string) {
    return str.split('').reverse().join('');
}
test('Reverse a given string', async() => {
    const str= 'hello';
    expect(reverseString(str)).toBe('olleh');
});


//Test 9
function findMax(arr: number[]) {
    let largest = arr[0];
    for(let i = 1; i<arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
test('Find the largest number in an array', async() => {
    const arr = [1, 5, 3, 9, 2];
    expect(findMax(arr)).toBe(9);
});


//Test 10
function contains(arr: any[], str:any) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return true;
        }
    }
    return false;
}
test('Check if array contains a string', async() => {
    const arr = ['apple', 'banana', 'orange'];
    const str = 'banana';
    expect(contains(arr, str)).toBe(true);
});

test('check if array contains a nuumber', async() => {
    const arr = [1, 2, 3, 4, 5];
    const num = 3;
    expect(contains(arr, num)).toBe(true);
});


//Test 11
function isPalindrome(str: string): boolean {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
test('Check if a string is a palindrome', async() => {
    const str = 'madam';
    expect(isPalindrome(str)).toBe(true);
});

test('Check if a string is not a palindrome', async() => {
    const str = 'hello';
    expect(isPalindrome(str)).toBe(false);
});