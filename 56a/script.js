'use strict';


const obj = {
    'name': 'Test',
    [Symbol('id')]: 1
}

// 2 способ создания символа
// let id = Symbol('id');
// obj[id] = 1;

console.log('obj', obj);

for (let value in obj) {
    console.log(value)
} // name только, сивола нет , полезно чтоб символ мог быть приватным свойством

// получаем символы через встр метод getOwnPropertySymbols
// возвращает массив с символами
console.log('ob1', Object.getOwnPropertySymbols(obj))

// чтобы вернуть наружу поле символа, не скрывая его
let id2 = Symbol('id2');

const obj2 = {
    'name': 'Test',
    [id2]: 1,
    getId: function () {
        return this[id2]
    }
}

console.log(obj2.getId())

for (let value in obj2) {
    console.log(value)  //name, getId
}

console.log('ob2', Object.getOwnPropertySymbols(obj2))


const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for('id')]: 123
}

// стронний код библиотеки
myAwesomeDB.id = '32323232'

// console.log(myAwesomeDB['id'])
console.log(myAwesomeDB[Symbol.for('id')])
console.log(myAwesomeDB)