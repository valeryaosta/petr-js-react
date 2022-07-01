'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1990',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`)
    }
}

// for in получает сам ключ (name, surname)
// for(let key in user){
//     console.log(user[key])
// }


const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function () {
} //в for of он не будет, в for in он есть
// for of проходит по значениям перебираемого объекта, в ключе уже лежит значение перебираемого объекта
// for(let key of arr){
//     console.log(key)
// }

// const str = 'string';
// for(let key in str){
//     console.log(str[key])
// }


const salaries = {
    john: 500,
    ivan: 1000,
    anna: 5000,
    sayHello: function () {
        console.log('Hey')
    }
}

// перебор всех зарплат
// чтобы объект salaries был итерируемым, то есть можно юзать for of с ним
// нужно добавить в объект метод с Symbol.iterator(встроен в JS)
salaries[Symbol.iterator] = function () {
    // должен вернуть объект с методом next (итератор)
    return {
        current: this.john,
        last: this.anna,
        next() {
            if (this.current < this.last) {
                this.current = this.current + 500
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }
        }
    }
}

// for (let res of salaries) {
//     console.log(res)
// }

// итератор можно вызывать и вручную без for of
// запускаем метод Symbol.iterator при пом () => результат работы метод это объект после ретурна на 46 строке, у кот есть next(),
const iterator = salaries[Symbol.iterator]();
console.log(iterator.next())

