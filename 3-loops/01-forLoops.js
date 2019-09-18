// Loops offer us a quick and easy way to do something repeatedly, or loop something over

// NOTE: there is a danger of infinite loops. 

/*
    - for loops take in 3 parameters
        1. Initial expression
        2. Conidition to be met
        3. Increment expression
*/

//     (1)        (2)    (3)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//

for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}

//

for (let i = 10; i >= 0; i -=1) {
    console.log(i)
}

//

for (let i = 0; i >= -24; i -= 2) {
    console.log(i)
}

//

let name = 'James';

for (let i = 0; i < name.length; i++ ) {
    console.log(name[i])
}

//

let sum = 0;
for (let i = 1; i <= 50; i++){
    sum += i;
}

console.log(sum);
