'use strict';
// ф-ции - конструкторы нужны для создания новых однотипных объектов (помогают избежать дублирования кода)

// ES5 - весь код ниже
// ES6 привнес классы - синтаксический сахар над ф-циями-генераторами

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

User.prototype.exit = function() {
    console.log(`User ${this.name} left`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();

ivan.exit();

console.log(ivan);
console.log(alex);