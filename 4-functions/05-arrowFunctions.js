// arrow functions aka fat arrow functions were introduced in ES6. They are a more concise way to write function expressions.
// ----- Not function declarations.
    // That means arrow functions do not get hoisted.



//BLOCK BODY ARROW FUNCTION
let hi = () => {
    console.log('hi');
    //return -- block body arrow functions must have a return in the body of the funciton
}
hi();

//CONCISE BODY
let hi = () => console.log('hi');
    //concise body arrow functions return by default.

//CONCISE VS BLOCK
let apples = (x) => console.log(`There are ${x} apples.`)
apples(10);

let apples = x => {
    console.log(`There are ${x} apples.`);
}
apples(10);



