"use strict";
// // //-----------BASIC TYPES---------------------------
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
// below is a way to write the code as above but cant be used in react
let d = 'world';
let e = 'world';
//---------------------------------
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// let myVal: string = addOrConcat(2,2,'concat')
// doesnt work
// Type 'string|number is not assignable to type 'string'
// Type 'number' is not assignable to type 'string'
let myVal = addOrConcat(2, 2, 'concat');
// adding assertion will make it work
// be careful TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// the DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const img1 = document.querySelector('img');
const myImg1 = document.getElementById('#img');
img1.src;
myImg1.src;
