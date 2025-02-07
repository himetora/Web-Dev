//datatypes
let message = "hello";
message = 123456;

//numbers
let n = 123;
n = 12.345;

//infinity
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity

//NaN - not a number
alert( "not a number" / 2 ); // NaN, such division is erroneous
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

//big int
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

//big int
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//strings
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

//boolean
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")

//null
let age = null;
//Приведенный выше код указывает, что age неизвестно

//undefined
let age;
alert(age); // shows "undefined"

let age = 100;
// change the value to undefined
age = undefined;
alert(age); // "undefined"

//objects and symbols
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)