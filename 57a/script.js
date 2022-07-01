'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    // birthday: '20/04/1990',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`)
    }
}

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));


// создаем новое св-во через обычное создание объекта, все 3 флага дескриптора изначально true;
console.log(Object.getOwnPropertyDescriptor(user, 'name'));


// изменили св-во, можем только читать, но изменять нельзя
// defineProperty - создаем св-ва
Object.defineProperty(user, 'name', {writable: false})
// user.name = 'Blabla' // из-за writable не можем переопределить!

// создаем новое св-во через defineProperty, вручную созданное св-во все 3 флага дескриптора изначально false;
Object.defineProperty(user, 'gender', {value: 'male'})
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// writable : true => св-во в объекте можно изменить, false -только для чтения
// enumerable : true => св-во будет перечисляться в циклах, false - цикл будет его игнорировать
// configurable : true => св-во можно удалить , а атрибуты можно изменить, false - инчае делать нельзя


// Object.defineProperty(user, 'showMyPublicData', {enumerable: false})
// for(let key in user) {
//     console.log(key)
// }

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// когда нужно изменить много/неск свойств
Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
})

