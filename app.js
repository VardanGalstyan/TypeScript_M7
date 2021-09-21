"use strict";
// T Y P E S
// 1. S T R I N G 
var string; // Assigning a string to a String 
// let string: string = 'hi' 
string = 'string';
// 2. N U M B E R 
var number = 1; // Assigning a number to a Number 
number = 2;
// 3. B O O L E A N
var bool = true;
bool = false;
// 4. A N Y 
var anyType = 'string';
anyType = true;
anyType = 2;
// 5. U N I O N
var uni;
uni = true;
uni = 'string';
// 6. A R R A Y S
var arraysOfString;
arraysOfString = ['2', '3', '4'];
var arraysOfNumber;
arraysOfNumber = [2, 3, 4, 5];
var arrayOfBoolean;
arrayOfBoolean = [true, false];
var arrayMix = [true];
arrayMix = ['2'];
// 7. T U P L E S
var arrayTuples = ['a', 2, true];
// 8. O B J E C T S
var person = {
    name: 'john',
    age: 23
};
person.name = 'string';
var year;
year = 2021;
year = 'Good One';
// 9. F U N C T I O N S
// function calcSum(a:number, b:number) {
//     return a + b
// }
var culSum;
culSum = function (first, second) {
    return first + second;
};
culSum(2, 3, 2);
// 10. V O I D
var sayHi = function () {
    console.log('Hi');
};
var mike = {
    name: "mike",
    age: 23
};
