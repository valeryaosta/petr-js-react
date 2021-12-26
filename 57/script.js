'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Valerya', 'Dima'];
// const shortNames = names.filter( function (name){
//     return name.length < 5}
// );
// const shortNames2 = names.filter( (name) => name.length < 4 );
// console.log(shortNames);
// console.log(shortNames2);

// map

// const answers = ['IvAN', 'HEllo', 'ValeryA', 'Bboy'];
// const result = answers.map(n => n.toLowerCase());
// console.log(result);

// every, some => return boolean

// const some = [4, 'asasa', 'lera'];
// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 3, 2, 1, -8, 123];
// const result = arr.reduce((sum, current) => sum + current);
// const result2 = arr.reduce((sum, current) => sum + current, 10);
// console.log(result);
// console.log(result2);

// const arr = ['apple', 'banana', 'melon', 'coconut'];
// const result = arr.reduce((sum, current) => sum + ', ' +current);
// const result2 = arr.reduce((sum, current) => `${sum}, ${current}`)
// console.log(result);
// console.log(result2);

// const obj = {
//     ivan: 'person',
//     ann: 'person',
//     wolf: 'animal',
//     cat: 'animal'
// };
// const newArr = Object.entries(obj)
//     .filter(item => item[1] === 'person')
//     .map(item => item[0]);
// console.log(newArr);