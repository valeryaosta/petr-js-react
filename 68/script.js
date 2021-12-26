'use strict';

const person = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age
    },
    set userAge(number) {
        this.age = number
    }
};
console.log(person.userAge = 30);
console.log(person.userAge);