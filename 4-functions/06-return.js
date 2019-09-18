let hi = () => {
//  (1)
    return 'hi';
}
//   (2)       (3)
let greeting = hi()

console.log(greeting);

/*
    1. keyword that bnrings data from inside of the local scope of the function to the outside of the function
    2. declare a new variable to hold the value of the return
    3. when called or invoked the function return becomes the value of our variable.

*/

function cName (name) {
    let capName = '';
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName);
    return capName;
}

const myName = cName('jAmes');
console.log(myName + `, how are you doing today?`)


//CHALLLLLLLLENGGGGEEEEE

function tipCalculator (bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2); //.toFixed = numbers of digits to appear after a decimal
}
let totalTip = tipCalculator(55.67);
console.log(totalTip);
