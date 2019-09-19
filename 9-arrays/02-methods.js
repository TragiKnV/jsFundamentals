let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

// for (foodItem of food) {
//     console.log(foodItem);
// }

food.push('pizza');
console.log('push', food);

food.splice(1, 1, 'bananas'); //removes shrimp and adds bananas --> (index, how many values to cut, what to add in place)
console.log('splice', food);

food.splice(2, 0, 'ice cream'); // to add an item without removing anything
console.log('splice', food);

food.pop(); //pop removes the last item of an array
console.log('pop:', food);

food.shift(); // removes the first item of the array
console.log('shift', food);

food.unshift('burger');
console.log('unshift', food);

// when to use forIN vs forOF
// a key goes inside of a lock. 
// lock is the OBJECT and the KEY is IN the OBJECT
// let lock = {
//     key: ''
// }