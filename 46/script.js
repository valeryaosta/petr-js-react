'use strict';

// 1. Обычная ф-ция: this = Window; но если 'use strict' undefined
// 2. Контект у методов объекта - сам объект
// 3. This в конструкторах и классах - новый экземпляр объекта
// 4. Ручная привязка this через методы ф-ций


// function showThis() {
//     console.log(this);
// }
// showThis();


// 1
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4,5);


// 2
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
}
obj.sum();

// 2 с потерянным контекстом
const obj2 = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this)    // здесь контекст undefined! т.к ф-ция запускается внутри метода, контекст теряется
        }
        shout();
    }
}
obj2.sum();


// 3 this в конструкторах и классах - новый экземпляр объекта
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log('Hello' + this.name);
    }
}
let ivan = new User('Ivan', 28);
console.log(ivan)

// 4  Ручная привязка this через методы ф-ций
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
}

sayName.call(user, 'Smith');            // только устанавливаем контекст,
sayName.apply(user, ["Smith"]);         // без вызова новой ф-ции

function count(num) {
    return this * num;
}

const double = count.bind(2);  // создает новую ф-цию и под нее подвязывает контекст
console.log(double(8));


// _________________________


const btn = document.querySelector('button');
btn.addEventListener('click', function (){               // this - сам элемент
    this.style.backgroundColor = 'red';
})
// this - сам элемент на котором произошло событие <button>
// в обработчиках через объявление обычной фунцкии мы имеем доступ к this; в стрелочной - нет
// btn.addEventListener('click', () => {                  //  !!ошибка, this теряется, это стрелочная ф-ция
//     this.style.backgroundColor = 'red';
// })
// btn.addEventListener('click', (e) => {                  //  чтобы работало используем event target!!
//     e.target.style.backgroundColor = 'red';
// })

const objJ = {
    num: 5,
    sayNumber: function (){
        const say = () => {
            console.log(this);
        }

        say();
    }
}
objJ.sayNumber();
// у стрелочной ф-ции нет своего this, она всегда берет его у своего родителя

const doubleD = a => a * 2;
console.log(doubleD(5));

