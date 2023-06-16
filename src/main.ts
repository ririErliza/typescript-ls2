// //-----------BASIC TYPES---------------------------

// // let myName : string = 'Lili'


// // we dont have to declare the value right away
// let myName : string; 
// let meaningOfLife : number;
// let isLoading : boolean;
// let album : any; // with any - we can assign any types
// let fruit : number | string; // this is union type, fruit can be number or string


// myName = 'Lili'
// myName = 'John' // we can re-assign another value (as long it is string)
//                 // but if use const we cant reassign new value

// meaningOfLife = 42
// isLoading = true
// album = 1984
// album = 'Delilah'
// album = true


// //----------------------------------------------------

// // const sum = (a,b)=>{
// //     return a+b
// // }
// //ts not happy when we type as above

// const sum1 = (a:number,b:string)=>{
//     return a+b
// }

// const sum2 = (a:number,b:number)=>{
//     return a+b
// }

// // both are okay 

// //----------------------------------------------------

// let postId : string | number;
// let isActive : number | boolean | string;

// let re:RegExp = /\w+g/




//----------------ARRAYS & OBJECTS-----------------------

//____ ARRAYS____

let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Acu', 5150]

let mixedData = ['EVH', 1984, true]


// stringArr[0]=42 // Type number is not assignable to type 'string'
// stringArr.push(42) // Argument of type 'number' is not assignable to type 'string'

stringArr[0]='John'
stringArr.push('Jack')

guitars[0] = 2009
guitars[1] = 'Clas'
// guitars.unshift(true) // Argument of type 'number' is not assignable to type 'string | number'

// stringArr = guitars // Type '(string | number ) []' is not assignable to type 'string[]'

guitars = stringArr // this worked

// guitars = mixedData // not working

mixedData = guitars // this worked

//_________________________________


let test = []
let bands : string[] = [] // this syntax mean this is only strings array

bands.push('Aerosmith')
// bands.push(true) // Argument of type 'boolean' is not assignable to parameter of type 'string'

//__Tuple__

let myTuple: [string, number, boolean]=['Dave', 42, true] // tuple

let mixed = ['John', 1, false] // union type

// myTuple = mixed 
        // Type '(string|number|boolean)[]' is not assignable to type '[string, number, boolean]
        // Target requires 3 elements but source my have fewer

mixed = myTuple

myTuple[1] = 55;
// myTuple[3] = 55; //Type '55' is not assignable to type 'undefined'
// myTuple[2] = 55; //Type 'number' is not assignable to type 'boolean'




//____ OBJECTS____

let myObj : object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'John'





type Singers = {
    name: string,
    active: boolean,
    albums: (string|number)[] // union type inside the array
}

let hw : Singers = {
    name : 'Hwasa',
    active: false,
    albums : [18, 'Trouble', 5150]
}

let lhy : Singers = {
    name : 'Hyori',
    active: true,
    albums : ['Vacation', 'Hup']
}

// hw.years = 1989 // doesnt work because we dont have years in Singers





type Actors = {
    name: string,
    active?: boolean,  // boolean | undefined
    projects: (string|number)[] // union type inside the array
}

let shk : Actors = {
    name : 'Hyekyo',
    active: true,
    projects : [1, 'II', 3, 'IV']
}

// we dont declare active prop here and it's ok
// because we put the question mark at active prop at Actors type
let mh : Actors = {
    name : 'Minho',
    projects : [1, 'II', 3, 'IV']
}


const greetActors = (actors: Actors) =>{
    return ` Hello ${actors.name}!`
}


console.log(greetActors(shk))



// INTERFACE
// Interfaces are similar to type aliases, except they only apply to object types.

interface Employers {
    name?: string,
    active: boolean,  // boolean | undefined
    projects: (string|number)[] // union type inside the array
}

let kr : Employers = {
    name : 'Karami',
    active: true,
    projects : [1, 'II', 3, 'IV']
}

// we dont declare active prop here and it's ok
// because we put the question mark at active prop at Actors type
let rb : Employers = {
    active: true,
    projects : [1, 'II', 3, 'IV']
}


const greetEmployers = (employers: Employers) =>{
    if(employers.name){
        return ` Hello ${employers.name.toUpperCase()}!`
    }
    return 'Hello!'
}


console.log(greetEmployers(rb))


// Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.

enum Grade{
    A,
    B,
    C,
    D
}

console.log(Grade.A) // 0


// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
enum Tier{
    A=1,
    B,
    C,
    D
}

console.log(Tier.C) // 3



//--------------------??????????----------------------------

// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string|number)[]

// type Gorengan = {
//     name?: string,
//     packing: boolean,
//     sellers: (string|number)[]
// }
// above can be code as below
type Gorengan = {
    name?: string,
    packing: boolean,
    sellers: stringOrNumberArray
}

type userId = stringOrNumber

// interface postId = stringOrNumber // doesnt work

// Literal types
let myName : 'Lili'
//myName = 'John' // ts doesnt like this

let userName: 'AMy' |'Hailey'|'Molly'
//userName= 'stacy' // ts doesnt like this
userName = 'Hailey' //ok
userName='Molly' //ok


//--------------------FUNCTIONS----------------------------

const add = (a:number, b:number): number =>{
    return a+b
}

add(1,4)// 5

// any function that doesnt have return statement
// should have void type of return data (which means there is no return at all)

// const lgMsg = (message: any) =>{
//     console.log(message)
// }

const logMsg = (message: any):void =>{
    console.log(message)
}

logMsg('Yuhuuuu!!!')
logMsg(add(2,5))



type mathFunction1 = (a:number, b:number) => number

let multiply: mathFunction1 = function(c,d) {
    return c*d
}

logMsg(multiply(2,3)) // 6


interface mathFunction2 {
    (a:number, b:number):number
}

let substract: mathFunction2 = function(c,d) {
    return c-d
}

logMsg(substract(9,7)) // 2




























































































