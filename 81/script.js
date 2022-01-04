'use strict';

// console.log(1);
// setTimeout(() => {
//     console.log('timeout 2')
// }, 2000);
// setTimeout(() => {
//     console.log('timeout 4')
// }, 4000);
// console.log(2);
//
// // 1 2 tim2, tim4


// забили call stack тк задача тяжеловесная, для норм загрузки страницы нужно разбивать
// let k = 0;
// function count() {
//     for (let i = 0; i < 1e9; i++){
//         k++;
//     }
//     alert('done');
// }
// count();


setTimeout(() => {
    console.log(1);
}, 0);
console.log(2);
// 2, 1
