"use strict";
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
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Acu', 5150];
let mixedData = ['EVH', 1984, true];
// stringArr[0]=42 // Type number is not assignable to type 'string'
// stringArr.push(42) // Argument of type 'number' is not assignable to type 'string'
stringArr[0] = 'John';
stringArr.push('Jack');
guitars[0] = 2009;
guitars[1] = 'Clas';
// guitars.unshift(true) // Argument of type 'number' is not assignable to type 'string | number'
// stringArr = guitars // Type '(string | number ) []' is not assignable to type 'string[]'
guitars = stringArr; // this worked
// guitars = mixedData // not working
mixedData = guitars; // this worked
//_________________________________
let test = [];
let bands = []; // this syntax mean this is only strings array
bands.push('Aerosmith');
// bands.push(true) // Argument of type 'boolean' is not assignable to parameter of type 'string'
//__Tuple__
let myTuple = ['Dave', 42, true]; // tuple
let mixed = ['John', 1, false]; // union type
// myTuple = mixed 
// Type '(string|number|boolean)[]' is not assignable to type '[string, number, boolean]
// Target requires 3 elements but source my have fewer
mixed = myTuple;
