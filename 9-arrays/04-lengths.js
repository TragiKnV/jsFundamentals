// let long = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(long.length);
// console.log(long.toString());
// console.log(typeof long);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr instanceof Array);
// console.log(arr.reverse());



// arr.forEach(arrList => {
//     console.log(arrList);
// })

if (arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
}
