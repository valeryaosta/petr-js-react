'use strict';

// new RegExp('pattern', 'flags');
         //   /pattern/f

const ans = prompt('Type your name');
// flags
// i - что-то в независимости от рпегистра
// g - сразу несколько вхождений
// m - многострочный режим

const reg = /n/;

const reg = /n/ig;
console.log(reg.test(ans));

// \d    - digits(цифры)
// \w    - words(все слова, все буквы)
// \s    - spaces(все пробелы)

// \D    - not digits(не цифры)
// \W    - not words(не буквы)

const ans2 = prompt('Type number');
const reg2 = /\d/g;
console.log(ans2.match(reg2));

console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt('Password');
console.log(pass.replace(/./g, '*'));
console.log(pass.replace(/\./g, '*'));

console.log('12-34-56'.replace(/-/g, ':'));

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\W/i));
console.log(str.match(/\D/ig));