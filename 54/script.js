'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

// console.log(block)

// if(block) {
//     console.log(block.textContent)
// }

// проверяет на undefined и null; если оно такое, то операция останавливатеся и возвращает undefined
// до textContent мы не дойдем и ошибка не покажется
// console.log(block?.textContent);

// но работает только на чтении свойств, если попробовать что-то записать то будет ошибка
// block?.textContent = '123' // ошибка


const userData = {
    name: 'Ivan',
    age: null,
    say: function (){
        console.log('hello')
    }
}
// так ошибку не получим, но это неудобно, большие слишком условия
if(userData && userData.skills && userData.skills.js){
    console.log(userData.skills.js)
}

// проверяет часть слева от ?, и если она существует - код идет дальше
// если не сушествует - код прекратится и будет возвращен undefined
console.log(userData?.skills?.js) // undefined

userData.say();
// если метода нет можно проверить так
userData.hey?.();