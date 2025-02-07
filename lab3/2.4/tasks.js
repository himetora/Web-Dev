//1
let admin, name;

name = "John";
admin = name;

alert(admin);
//ответ: John

//2
let planetname = "Earth";

let username = "John";

//3
const birthday = '18.04.1982';
const age = someCode(birthday);
//or
const BIRTHDAY = '18.04.1982';
const AGE = someCode(BIRTHDAY);

//answer:
const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);
//BIRTHDAY - правильно
//age - правильно
//хоть age и константа сегодня у нас один возраст, а через год будет другой
//Это константа в том смысле, что она не меняется во время выполнения кода