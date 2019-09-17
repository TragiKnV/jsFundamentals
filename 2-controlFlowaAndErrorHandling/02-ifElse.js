// let weather = 75;

// if(weather < 70) {
//     console.log('wear a jacket'); 
// } else {
//     console.log('no jacket necessary');
// }


// let name = 'James';

// if(name == 'James') {
//     console.log('Hello, my name is ' + name);
// } else {
//     console.log('Hello, is your name ' + name + '?');
// }


// let name = 'nAmEs'
// if(name.charAt(0) == name.charAt(0).toUpperCase()) {
//     console.log(name[0]);
// } else {
//     console.log(name[1].toLowerCase());
//     console.log(name[2].toLowerCase());
//     console.log(name[3].toLowerCase());
//     console.log(name[4].toLowerCase());
// }


let name = "jAmEs"

if (name[0] == name[0].toUpperCase()) {
    console.log(name[0])
} else {
    console.log(name.slice(1).toLowerCase())
}

// the slice() method extracts parts of a string and returns the extracted parts in a new string

let name = 'jAmEs'

if (name[0] == name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase();
    console.log('console.log #1:', isUppercase);
} else {
    let notUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console log #2:', notUppercase);
}

//ELSE IF

let age = 28

if ( age >= 25) {
    console.log('Yay! You can rent a car')
} else if (age >= 21) {
    console.log('Yay you can drink')
} else if (age >= 18) {
    console.log('Yay  you can vote')
} else {
    console.log('Sorry youre too young')
}
