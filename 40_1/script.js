'use strict';

// let num = 5; debugger;
// function logNumber() {
//     debugger;
//     console.log(num)
// }
// num = 6;
// logNumber(); debugger;
//
// num = 8;
// logNumber(); debugger;

// function createCounter() {
//     debugger
//     let counter = 0;
//
//     const myFunc = function () {
//         debugger
//         counter = counter + 1
//         return counter; debugger;
//     }
//     debugger
//     return myFunc
// }
//
// const inc = createCounter()
// const c1 = inc(); debugger;
// const c2 = inc(); debugger;
// const c3 = inc(); debugger;
//
// console.log(c1, c2, c3)

// function pow(x, n) {
//     let res = 1;
//     for (let i = 0; i < n; i++) {
//         // res *=x
//         res = x * res
//     }
//     return res
// }

// recursion
function pow(x, n) {
   if(n === 1) {return x}
   return x * pow(x, n-1)
}

console.log(pow(2, 2))
console.log(pow(2, 3))
console.log(pow(2, 4))
