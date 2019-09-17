/*
    -falsy values: A value that is considered false when encountered in boolean context
        -there are 6 falcsy values in JavaScript
            1. false
            2. 0
            3. "", '' , `` - empty quotes
            4. null
            5. undefined
            6. NaN
*/

let isOn = true;

if(isOn == true) {
    console.log('the light is on');
}

// if(isOn) {
//     console.log('the light is on')
// } ----- since variable is set to true this will also read out true

let isOn = false;

if(isOn == false) {
    console.log('the light is off')
}


let weather = 79;

if(weather < 65) {
    console.log('wear a jacket')
}