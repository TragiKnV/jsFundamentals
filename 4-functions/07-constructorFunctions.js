let personOne = {
    name: 'Christine',
    age: 31,
    canVote: true,
}
let personTwo = {
    name: 'James',
    age: 28,
    canVote: true,
}
let personThree = {
    name: 'Layla',
    age: 5,
    canVote: false,
}



// (1)    (2)          (3)
function Person(name, age, canVote) {
//   (4)  (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//               (7)   (8)
let personFour = new Person(`Jack`, 29, true);
console.log(personFour);

/*
    1. The function keyword
    2. The function name. For constructor functions the should should be capitalized.
    3. The parameters. These will end up being the values once function is called/invoked.
    4. the 'this' keyword gives us the ability to refer back to whatever called or activated it. In this case 'this' refers to our function 'person'
    5. this will be the key of the new object we create. This is NOT referencing the parameters.
    6. Refers to the parameters we pass through our constructor function.
    7 & 8. The 'new' keyword is calling our person constructor function, creating a 'new' person with the values we pass in as arguments. 

    */