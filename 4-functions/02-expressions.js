/*
    1.The variable holds the function placed inside of it. 

    -difference between function declaration and function expression.
        -function declarations get hoisted
        -function expressions DO NOT get hoisted
*/

//  (1)
let hey = function hi() {
    console.log('HI');
}

hey();


