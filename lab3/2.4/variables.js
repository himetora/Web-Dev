//переменные
let message;
message = 'Hello';

let message;
message = 'Hello!';
alert(message);

//переменные иожно объявлять по разному
let user = 'John', age = 25, message = 'Hello';
//
let user = 'John';
let age = 25;
let message = 'Hello';
//
let user = 'John',
  age = 25,
  message = 'Hello';
//
let user = 'John'
  , age = 25
  , message = 'Hello';
//
//Также есть var
var message = 'Hello';
//
//переменные можно перезаписывать
let message;
message = 'Hello!';
message = 'World!'; // value changed
alert(message);
//
//переменные можно копировать
let hello = 'Hello world!';
let message;
message = hello;

alert(hello); // Hello world!
alert(message); // Hello world!

//Именование переменных
let userName;
let test123;

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3

//Примеры неправильных имен переменных:
let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name

let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!

"use strict";
num = 5; // error: num is not defined

//Константы
const myBirthday = '18.04.1982';

const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

const pageLoadTime = /* time taken by a webpage to load */;