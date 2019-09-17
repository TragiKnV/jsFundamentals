/* 
    -switch statements execute a block of code depending on different cases
    -switch statements are often used together with break or default keywords
        -break keyword breaks out of the switch block all together
        -default keyword specifies code to run if there is no case match
*/

// let officeCharacter = 'Michael';

// switch (officeCharacter) {
//     case 'Michael':
//         console.log('My mind is going a mile an hour');
//         break;
//     case 'Dwight':
//         console.log('I am fast. To give you a reference point, Im somewhere between a snake and a mongoose... and a panther');
//         break;
//     case 'Jim':
//         console.log('Bears, Beets, Battlestar Galactica');
//         break;
//     default:
//         console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
//         // backticks are used for string interpolation
// }


let dessert = 'Ice Cream';

switch (dessert) {
    case 'Pie':
        console.log('Pie, Pie, me oh my!');
        break
    case 'Cake':
        console.log('Cake is great!');
        break
    case "Ice Cream":
        console.log('I scream for ice cream!');
        break
    default:
        console.log('Not on the menu');
}


// switch statement with multiple conditions

let num = -4;

switch(true) {
    case(num < 0 && num > -10):
        console.log('case 1 ran');
        break
    case(num >0):
        console.log('case 2 ran');
        break
    default:
        console.log('did not work');
}