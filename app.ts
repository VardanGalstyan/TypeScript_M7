// T Y P E S

// 1. S T R I N G 

let string: string; // Assigning a string to a String 
// let string: string = 'hi' 
string = 'string'

// 2. N U M B E R 

let number: number = 1 // Assigning a number to a Number 
number = 2

// 3. B O O L E A N

let bool: boolean = true
bool = false

// 4. A N Y 

let anyType: any = 'string'
anyType = true
anyType = 2

// 5. U N I O N

let uni: string | boolean
uni = true
uni = 'string'


// 6. A R R A Y S

let arraysOfString: string[]
arraysOfString = ['2', '3', '4']

let arraysOfNumber: number[]
arraysOfNumber = [2, 3, 4, 5]

let arrayOfBoolean: boolean[]
arrayOfBoolean = [true, false]

let arrayMix: (string | number | boolean)[] = [true]
arrayMix = ['2']

// 7. T U P L E S

let arrayTuples: [string, number, boolean] = ['a', 2, true]

// 8. O B J E C T S

let person = {
    name: 'john',
    age: 23
}

person.name = 'string'

// CUSTOM TYPES

type stringOrNum = string | number
let year: stringOrNum

year = 2021
year = 'Good One'

// 9. F U N C T I O N S

// function calcSum(a:number, b:number) {
//     return a + b
// }

let culSum: (a: number, b: number, third?: number) => number

culSum = (first: number, second: number) => {
    return first + second
}

culSum(2, 3, 2)


// 10. V O I D

let sayHi = () => {
    console.log('Hi');
    
}

// 11. I N T E R F A C E

interface PersonInterface {
    name: string
    age: number
}

let mike : PersonInterface = {
    name: "mike", 
    age: 23
}






