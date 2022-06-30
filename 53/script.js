'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    // если есть какая-то высота, ее умножаем на существующую ширину
    // если значений h/w нет, берем 200
    // из-за приортиетности ?? оператора, нужно поставить скобки, чтобы было корректно
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}
changeParams(box, newHeight, newWidth);

let userName;
console.log(userName ?? 'User'); // 'User'
// ?? nullish operator, ES11, проверка только на null и undefined!
// малый приоритет

let userName2 = NaN;
console.log(userName2 ?? 'User'); // NaN

let userName3;
let userKey;
console.log(userName3 ?? userKey ?? 'User'); // 'User';
// console.log(userName3 && userKey ?? 'User'); // Ошибка;