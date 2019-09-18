let Fb = 15;

if (Fb % 3 === 0 && Fb % 5 === 0) {
    console.log('Fizz Buzz')
} else if (Fb % 5 === 0) {
    console.log('Buzz')
} else if (Fb % 3 === 0) {
    console.log('Fizz')
} else {
    console.log('Fb')
}


// Switch 

let FB = 15;

switch (true) {
    case (FB % 5 === 0 && FB % 3 === 0):
        console.log('Fizz Buzz');
        break;
    case (FB % 5 === 0):
        console.log('Buzz');
        break;
    case (FB % 3 === 0):
        console.log('Fizz');
        break;
    default:
        console.log(FB);
}


// Ternary
let fBB = 5;

(fBB % 5 === 0 && fBB % 3 === 0) ? console.log('Fizz Buzz'): (fBB % 5 === 0) ? console.log('Buzz') :
    (fBB % 3 === 0) ? console.log('Buzz') :
    console.log(fBB);