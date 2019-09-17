// variables are named containers for strong data values
// we name variables so that we can refer back to them later


        let      a       =      2;
/*     (1)     (2)     (3)    (4)

    1: variable javascript keyword
    2: variable name
    3: assignment operator
    4: data type/value

    /*
    notes on variables:
        - a variable name must begin with a letter, underscore, or dollar sign
        - numbers may follow the above characters, but cannot come first
        - javascript is case sensitive - 'hello' and 'Hello' are different variables
        - no spaces are allowed in variable names
        - camelCase is the best practice for naming variables.
        - this is good practice because it helps keep variables readable--  let myName = 'Zach';
*/

/* 
        var, let, const:

            - var : 'old' keyword for variables. won't use as often
            -let : 'new' keyword for variables. introduced in es6
            -const: declares an unchangeable variable
*/

// Declaration: left side of the variable
// initializaiton: Right side of variable

let x;
console.log('Declaration:', x); //decleration

x = 10;
console.log('Initialization:', x); // initialization

x = 33;
console.log('Reinitialization:', x);

let today  = 'Great!';
const elevenFifty = 'Wonderful';
console.log(today, elevenFifty);

today = 'Lovely';
console.log(today, elevenFifty);


