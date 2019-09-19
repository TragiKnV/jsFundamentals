/* how can we iterate over an array?
        - forOf loop
        - for loop
        -forEach() method

    -all of the above iterate over properties in an array
*/

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

for (let i = 0; i < food.length; i++) {
console.log(food[i]);
}

food.forEach(foodItem => {
    console.log(foodItem);
})

food.forEach((foodItem, index) => {
    console.log(foodItem);
    console.log(index);
})

let movies = ['Hunt for Red October', 'Down Periscope', 'Hunter Kills'];

movies.forEach(movieList => {
    console.log(movieList);
})

movies.push('U571');
console.log('push', movies);

movies.splice(2, 1, 'Hunter Kiler');
console.log('splice', movies);