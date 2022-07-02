'use strict';

// console.log(Number.MAX_SAFE_INTEGER); // макс число с кот JS может работать, если нужно больше исп BigINT;

const bigint = 12345678901883868468468682927729739n;
const sameBigint = BigInt(12345678901883868468468682927729739);

// console.log(5n + 1); // ERROR
// console.log(Math.round(5.5n)); // ERROR
// console.log(1n + 2n); // 3n

console.log(5n / 2n); // округ результат без дробной части BigInt

// console.log(5n > 2n); // true
// console.log(5n > 2); // true
// console.log(2n == 2); // true
// console.log(2n === 2); // false


// BigInt + number
let bigInt = 1n;
let number = 2;

console.log(bigInt + BigInt(number)) // 3n
console.log(Number(bigInt) + number) // 3
// console.log(+bigInt + number) // error, унарный плюс не может конвертировать BigInt в число!!!



