// Boolean; has two possible values of true or false.

let on = true;
console.log(on);

let off = false
console.log(off);

// Null: Is an empty value. Think of it as an empty container. Nothing is in it, but i can be filled in later.

let empty = null;
console.log(empty);

// Undefined: no value is assigned and does not act as an empty container. 

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

// Numbers: Numbers are literally just number. aka integers

let degrees = 85;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let a = Number('123');
console.log(a);

// Strings: datatype used to represent text. Either wrapped in single or double quotes.

let stringOne = 'single quotes';
let stringTwo = "double quotes";
console.log(stringOne, stringTwo);

// numbers vs strings: Will only add numbers if there are no quotes. Quotes turn any text/number into a string

let first = 1050 + 100;
console.log(first);

let second = '1050' + '100';
console.log(second);

// Objects: Used to store many values instead of a singular value. Objects hold key value pairs. Objects are wrapped in curly brackets

let frodo = {
    race: 'hobbit',
    rings: '1',
    cloak: 'true'
}
console.log(frodo);
console.log(typeof frodo);

// arrays: containers that hold a list of items. Arrays are wrapped in square brackets

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);


// Addition and Concatenation

let third = 1050 + '100';
console.log(third);
console.log(typeof third);

let firstName = 'James';
let lastName = 'Higgins';
let houseNumber = '1140';
let street = 'Ascalon Court';
let city = 'Indianapolis';
let state = 'IN';
let zip = '46239';

console.log(firstName, lastName, houseNumber, street, city +',', state, zip);


// STRING PROPERTIES: 
    //      properties: qualities associated with certain data types.
    //      strings and numbers both have qualities associated with them, and their own properties.

let myName = 'James';
console.log(myName.length); // only time javascript doesn't start counting from 0


// STRING METHODS: methods are tools that help us manipulate our data
    // .Properties use '.', methods use '.Methods()'

    let myNameIs = 'James';
    console.log(myNameIs.toUpperCase());

    let home = 'my home is Fishers';
    console.log(home.includes('Fishers'));

 var sent = 'this sentence will be split into individual parts';
console.log(sent.split(''));


