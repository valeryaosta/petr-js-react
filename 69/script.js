'use strict';

// function

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function () {
        console.log(`User's name ${this.name}, age ${userAge}`)
    }
    this.getAge = function () {
        return userAge;
    }
    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Forbidden age!')
        }
    }
}

const ivan = new User('Ivan', 30);
console.log(ivan.name);
console.log(ivan.getAge());
ivan.setAge(40);
ivan.setAge(400);
console.log(ivan.getAge());

ivan.say();

// classes

class User2 {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    // private нет в стандартах
    #surname = 'Petrov';

    say = () => {
        console.log(`User's name ${this.name} ${this.#surname}, age ${this._age}`)
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Forbidden age!')
        }
    }
}

const ivan2 = new User2('Ivan', 24);
console.log(ivan2.surname);
ivan2.say();