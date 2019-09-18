// great for iterating over values in an object. Properties in an object are whats called 'enumerable'
// for in loops iterate over an objects enumerated properties.
// FOR IN LOOPS ARE MAINLY USED ON OBJECTS
let student = {
    name:'James',
    awesome: true,
    degree: 'javascript',
    week: 1,
};

for (let item in student) {
    // console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'mainecoon', 'siamese', 'burmese']

for (cat in catArray) {
    // console.log(cat);
    console.log(catArray[cat]);
}


// if (name[0] == name[0].toUpperCase()) {
//     console.log(name[0])
// } else {
//     console.log(name.slice(1).toLowerCase())
// }

let name = 'jAmEs';
let capName;

for (let n in name) {
    if (n == 0) {
    capName = name[n].toUpperCase();
} else {
    capName += name[n].toLowerCase();
}
}
console.log(capName)
