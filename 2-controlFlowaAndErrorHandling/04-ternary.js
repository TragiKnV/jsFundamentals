// act as a shortcut for writing if/else or switch statements

let num = 6;
(num > 0) ? console.log('yes it is') : console.log('no it isnt');
// ternary

// [1]   [2]                       [3]
/*
1. Parens acts as our if. chekcs if the statement is true.
2. if the statement is true, run what's after the question mark.
3. colon acts as our 'else' or catch all statement


*/
// if (num > 0) {
//     console.log('yes it is')
// } else {
//     console.log('no it isnt')
// }

// let num = 6;

// (num == 0) ? console.log('hello') : (num < 0) ? console.log('hi') : console.log('goodbye');
// // can also be written like the example below
// (num == 0) ? console.log('hello')
//     : (num < 0) ? console.log('Hi')
//     : console.log('goodbye');


let age = 28;

(age >= 25) ? console.log('Yay you can rent a car') : (age >= 21) ? console.log('yay you can drink') : (age >= 18) ? console.log('yay you can vote') : console.log('sorry youre too young');