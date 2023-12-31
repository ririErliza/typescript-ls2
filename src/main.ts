// // //-----------BASIC TYPES---------------------------

// // let myName : string = 'Lili'


// // we dont have to declare the value right away
// //let myName : string; 
// let meaningOfLife : number;
// let isLoading : boolean;
// let album : any; // with any - we can assign any types
// let fruit : number | string; // this is union type, fruit can be number or string


// // myName = 'Lili'
// // myName = 'John' // we can re-assign another value (as long it is string)
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




// //----------------ARRAYS & OBJECTS-----------------------

// //____ ARRAYS____

// let stringArr = ['one', 'hey', 'Dave']

// let guitars = ['Strat', 'Acu', 5150]

// let mixedData = ['EVH', 1984, true]


// // stringArr[0]=42 // Type number is not assignable to type 'string'
// // stringArr.push(42) // Argument of type 'number' is not assignable to type 'string'

// stringArr[0]='John'
// stringArr.push('Jack')

// guitars[0] = 2009
// guitars[1] = 'Clas'
// // guitars.unshift(true) // Argument of type 'number' is not assignable to type 'string | number'

// // stringArr = guitars // Type '(string | number ) []' is not assignable to type 'string[]'

// guitars = stringArr // this worked

// // guitars = mixedData // not working

// mixedData = guitars // this worked

// //_________________________________


// let test = []
// let bands : string[] = [] // this syntax mean this is only strings array

// bands.push('Aerosmith')
// // bands.push(true) // Argument of type 'boolean' is not assignable to parameter of type 'string'

// //__Tuple__

// let myTuple: [string, number, boolean]=['Dave', 42, true] // tuple

// let mixed = ['John', 1, false] // union type

// // myTuple = mixed 
//         // Type '(string|number|boolean)[]' is not assignable to type '[string, number, boolean]
//         // Target requires 3 elements but source my have fewer

// mixed = myTuple

// myTuple[1] = 55;
// // myTuple[3] = 55; //Type '55' is not assignable to type 'undefined'
// // myTuple[2] = 55; //Type 'number' is not assignable to type 'boolean'




// //____ OBJECTS____

// let myObj : object
// myObj = []
// console.log(typeof myObj)
// myObj = bands
// myObj = {}

// const exampleObj = {
//     prop1: 'Dave',
//     prop2: true,
// }

// exampleObj.prop1 = 'John'





// type Singers = {
//     name: string,
//     active: boolean,
//     albums: (string|number)[] // union type inside the array
// }

// let hw : Singers = {
//     name : 'Hwasa',
//     active: false,
//     albums : [18, 'Trouble', 5150]
// }

// let lhy : Singers = {
//     name : 'Hyori',
//     active: true,
//     albums : ['Vacation', 'Hup']
// }

// // hw.years = 1989 // doesnt work because we dont have years in Singers





// type Actors = {
//     name: string,
//     active?: boolean,  // boolean | undefined
//     projects: (string|number)[] // union type inside the array
// }

// let shk : Actors = {
//     name : 'Hyekyo',
//     active: true,
//     projects : [1, 'II', 3, 'IV']
// }

// // we dont declare active prop here and it's ok
// // because we put the question mark at active prop at Actors type
// let mh : Actors = {
//     name : 'Minho',
//     projects : [1, 'II', 3, 'IV']
// }


// const greetActors = (actors: Actors) =>{
//     return ` Hello ${actors.name}!`
// }


// console.log(greetActors(shk))



// // INTERFACE
// // Interfaces are similar to type aliases, except they only apply to object types.

// interface Employers {
//     name?: string,
//     active: boolean,  // boolean | undefined
//     projects: (string|number)[] // union type inside the array
// }

// let kr : Employers = {
//     name : 'Karami',
//     active: true,
//     projects : [1, 'II', 3, 'IV']
// }

// // we dont declare active prop here and it's ok
// // because we put the question mark at active prop at Actors type
// let rb : Employers = {
//     active: true,
//     projects : [1, 'II', 3, 'IV']
// }


// const greetEmployers = (employers: Employers) =>{
//     if(employers.name){
//         return ` Hello ${employers.name.toUpperCase()}!`
//     }
//     return 'Hello!'
// }


// console.log(greetEmployers(rb))


// type Gorengan = {
//     name?: string,
//     fried: boolean,  // boolean | undefined
//     vendors: (string|number)[] // union type inside the array
// }

// let th : Gorengan = {
//     name : 'TahuIsi',
//     fried: true,
//     vendors : [1, 'II', 3, 'IV']
// }

// // we dont declare active prop here and it's ok
// // because we put the question mark at active prop at Actors type
// let bk : Gorengan = {
//     name : 'Bakwan',
//     fried: true,
//     vendors : [1, 'II', 3, 'IV']
// }


// const beliGorengan = (gorengan: Gorengan) =>{
//     if(gorengan.name){
//         return ` Mau beli ${gorengan.name.toUpperCase()}!`
//     }
//     return 'Mau beli apa si ?!'
// }


// console.log(beliGorengan(bk))


// // Enums
// // An enum is a special "class" that represents a group of constants (unchangeable variables).
// // Enums come in two flavors string and numeric.

// enum Grade{
//     A,
//     B,
//     C,
//     D
// }

// console.log(Grade.A) // 0


// // Numeric Enums - Initialized
// // You can set the value of the first numeric enum and have it auto increment from that:
// enum Tier{
//     A=1,
//     B,
//     C,
//     D
// }

// console.log(Tier.C) // 3



// //--------------------??????????----------------------------

// // Type Aliases
// type stringOrNumber = string | number

// type stringOrNumberArray = (string|number)[]

// // type Gorengan = {
// //     name?: string,
// //     packing: boolean,
// //     sellers: (string|number)[]
// // }
// // above can be code as below
// type Gorengan1 = {
//     name?: string,
//     packing: boolean,
//     sellers: stringOrNumberArray
// }

// type userId = stringOrNumber

// // interface postId = stringOrNumber // doesnt work

// // Literal types
// let myName : 'Lili'
// //myName = 'John' // ts doesnt like this

// let userName: 'AMy' |'Hailey'|'Molly'
// //userName= 'stacy' // ts doesnt like this
// userName = 'Hailey' //ok
// userName='Molly' //ok


// //--------------------FUNCTIONS----------------------------

// const add = (a:number, b:number): number =>{
//     return a+b
// }

// add(1,4)// 5

// // any function that doesnt have return statement
// // should have void type of return data (which means there is no return at all)

// // const lgMsg = (message: any) =>{
// //     console.log(message)
// // }

// const logMsg = (message: any):void =>{
//     console.log(message)
// }

// logMsg('Yuhuuuu!!!')
// logMsg(add(2,5))



// type mathFunction1 = (a:number, b:number) => number

// let multiply: mathFunction1 = function(c,d) {
//     return c*d
// }

// logMsg(multiply(2,3)) // 6


// interface mathFunction2 {
//     (a:number, b:number):number
// }

// let substract: mathFunction2 = function(c,d) {
//     return c-d
// }

// logMsg(substract(9,7)) // 2

// // optional parameters
// const addAll = (a:number,b:number,c?:number): number =>{
//     if (typeof c !== 'undefined'){
//         return a+b+c
//     }
//     return a+b
// }

// // default param value
// const sumAll = (a:number,b:number,c:number=2): number =>{
//     return a+b+c
// }

// const sumAll2 = (a:number=10,b:number,c:number=2): number =>{
//     return a+b+c
// }

// logMsg(addAll(1,3,4)) // 8
// logMsg(addAll(1,3)) // 4
// logMsg(sumAll(1,3)) // 6
// logMsg(sumAll2(undefined,3)) // 15

// // rest parameters

// const total1 = (a:number, ...nums:number[]):number=>{
//     return a + nums.reduce((prev,curr)=> prev + curr)
// }

// logMsg(total1(10,2,3))

// const total2 = (...nums:number[]):number=>{
//     return nums.reduce((prev,curr)=> prev + curr)
// }
// logMsg(total2(10,2,3))


// // this one will throw error  
// // A rest parameter must be last in a parameter list
// // const total3 = (...nums:number[], c:number) :number=>{
// //     return nums.reduce((prev,curr)=> prev + curr) + c
// // }
// // logMsg(total3(10,2,3))  


// const createError = (errMsg: string) : never =>{
//     throw new Error(errMsg)
// }

// const infinite = () =>{
//     let i: number = 1
//     while (true){
//         i++
//         if(1>100) break
//     }
// }

// // custom type guard
// const isNumber = (value: any): boolean =>{
//     return typeof value === 'number'?true:false
// }

// // use of the never type
// // const numberOrString = (value:number | string):string => {
// //     if(typeof value === 'string') return 'string'
// //     if(typeof value === 'number') return 'number'
// //     return createError('This should never happen!')
// // }
// const numberOrString = (value:number | string):string => {
//     if(typeof value === 'string') return 'string'
//     if(isNumber(value)) return 'number'
//     return createError('This should never happen!')
// }


// //--------------------ASSERTIONS----------------------------
// // as

// type One = string
// type Two = string | number
// type Three = 'hello'

// // convert to more or less specific

// let a: One = 'hello'
// let b = a as Two // less specific
// let c = a as Three // more specific

// // below is a way to write the code as above but cant be used in react
// let d = <One>'world'
// let e = <string | number>'world'

// //---------------------------------

// const addOrConcat = (a:number, b:number, c:'add'|'concat') : number | string =>{
//     if (c === 'add') return a + b
//     return ''+ a + b
// }

// // let myVal: string = addOrConcat(2,2,'concat')
// // doesnt work
// // Type 'string|number is not assignable to type 'string'
// // Type 'number' is not assignable to type 'string'

// let myVal: string = addOrConcat(2,2,'concat') as string
// // adding assertion will make it work


// // be careful TS sees no problem - but a string is returned
// let nextVal: number = addOrConcat(2,2,'concat') as number

// // the DOM
// const img = document.querySelector('img')
// const myImg = document.getElementById('#img')

// const img1 = document.querySelector('img')!
// const myImg1 = document.getElementById('#img') as HTMLImageElement

// img1.src
// myImg1.src

// //--------------------CLASSES---------------------------

// class CoderExample{
//     name: string
//     music: string
//     age: number
//     lang: string

//     constructor(
//         name: string, 
//         music:string, 
//         age:number, 
//         lang:string
//     ){
//         this.name = name
//         this.music= music
//         this.age= age
//         this.lang= lang
//     }
// }

// // the code above is too long
// // below is the DRYer version

// class Coder1{

//     constructor(
//         public name: string, 
//         public music:string, 
//         public age:number, 
//         public lang:string
//     ){
//         this.name = name
//         this.music= music
//         this.age= age
//         this.lang= lang
//     }
// }

// // or
// class Coder2{

//     constructor(
//         public readonly name: string, 
//         readonly music:string, 
//         private age:number, 
//         protected lang:string = 'Typescript'
//     ){
//         this.name
//         this.music
//         this.age
//         this.lang
//     }

//     public getAge(){
//         return `Hello, I'm ${this.age}`
//     }
// }

// const John = new Coder2('John Smith', 'Rock',  44)

// console.log(John)
// console.log(John.getAge())
// // console.log(John.age) // property age is private
// // console.log(John.lang) // property lang is protected


// class WebDev extends Coder2 {
//     constructor(
//         public computer: string,
//         name: string,
//         music: string,
//         age: number,
//     ){
//         super(name, music, age)
//         this.computer
//     }

//     public getLang() {
//         return `I write ${this.lang}`
//     }
// }

// const Sara = new WebDev ('Win', 'Sara', 'Rock', 22)
// console.log(Sara.getLang())
// // console.log(Sara.age) // property age is private
// // console.log(Sara.lang) // property lang is protected

// // // // // // // // // // // // // // // // // // // // //

// // interface with 2 properties and 1 method
// interface Musician {
//     name: string,
//     instrument: string,
//     play(action: string): string
// }

// class Guitarist implements Musician{
//     name : string
//     instrument: string

//     constructor(name:string, instrument:string){
//         this.name = name
//         this.instrument = instrument
//     }
//     play(action: string){
//         return `${this.name} ${action} the ${this.instrument}`
//     }
// }

// const Page = new Guitarist('Jimmy', 'guitar')
// console.log(Page.play('strums'))
// // Jimmy strums the guitar

// // // // // // // // // // // // // // // // // // // // //

// class Peeps{
//     static count: number = 0

//     static getCount(): number{
//         return Peeps.count
//     }
//     public id:number

//     constructor(public name:string){
//         this.name = name
//         this.id = ++Peeps.count
//     }
// }

// const Jane = new Peeps('Jane')
// const Steve = new Peeps('Steve')
// const Amy = new Peeps('Amy')

// console.log(Amy.id)
// console.log(Steve.id)
// console.log(Peeps.count) // 2


// // // // // // // // // // // // // // // // // // // // //

// class Bands {
//     private dataState: string[]

//     constructor(){
//         this.dataState = []
//     }

//     public get data(): string[]{
//         return this.dataState
//     }

//     public set data(value:string[]){
//         if(Array.isArray(value) && value.every(el => typeof el === 'string')){
//             this.dataState = value
//             return
//         }else throw new Error('Param is not an array of strings')
//     }
// }

// const MyBands = new Bands()
// MyBands.data = ['Neil Young', 'Led Zep']
// console.log(MyBands.data) // ['Neil Young', 'Led Zep']
// MyBands.data = [...MyBands.data, 'ZZ Top']
// console.log(MyBands.data) //  ['Neil Young', 'Led Zep', 'ZZ Top']
// // MyBands.data = ['Van Halen', 5569] // doesnt work ; Type 'number' is not assignable to type 'string'.
// // console.log(MyBands.data)
// MyBands.data = ['Van Halen', 'RockyRok']
// console.log(MyBands.data)





//------------------INDEX SIGNATURES-----------------------
//--------------------------&------------------------------
//-----------------KEY OF ASSERTIONS-----------------------

// Index SIgnatures
interface TransactionObj{
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza) // -10
console.log(todaysTransactions['Job']) // 50



















































