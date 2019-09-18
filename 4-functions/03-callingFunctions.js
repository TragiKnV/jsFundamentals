function hi() {
    console.log('HI');
}

hi(); //to call or invoke a function it has to have () at the end.

console.log(hi);
console.log(hi());


/*
    -The parenthesis after a function immedaitely invoke the function being called.
    - we get undefined because no info from the function is being returned.

*/


function list() {
    for (num = 0; num < 11; num++){
        console.log(num);
    }
}
list();

let arr = ['This', 'is', 'really', 'cool'];

function values() {
    for (let string of arr) {
    console.log(string);
    }
}
values();


//



let car = ['nissan', 'toyota', 'honda'];

function make() {
    for (let string of car) {
        console.log(string);
    }
}
make();