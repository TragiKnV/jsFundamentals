console.log(name);
let name = 'James';
// above code does not work due to variable name not being initiliazed first. code reads from top to bottom.
// it realizes the variable 'name' but doesn't assign it's value on the first pass through
// variable values should be assing prior to the execution
b();

function b() {
    console.log('I have been hoisted');
}