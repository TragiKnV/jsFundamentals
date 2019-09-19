// Arrays are containers that hold a list of items.
// denoted by square brackets [];

// Able to hold multiple data types

let list = ['orange', 'banana', 'oreos'];
console.log(list[2]);

// to dig into an array we can use square bracket notation that contains the index number of the item to reference.

let student = ['tony', 'marshall', 'ryan', 'ray', 23, true,['Rhys', 'Iesha', 'Amira']];
// console.log(student[1], student[3]);
// console.log(student[6][2]);
console.log(`Hello`,student[6][2],`, you look nice today`);

// COULD ALSO BE DONE LIKE BELOW
// let name = student[6][2];
// console.log(`hello ${name}, you look nice today`);


// console.log(typeof student);
// console.log(students instanceof Array); ---> instanceof operator is used to check the type of an object at run time. Arrays are technically objetcs