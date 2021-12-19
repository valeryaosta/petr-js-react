"use strict";

const person = {
    name: 'Alex',
    tel: '+123456789',
    parents: {
        mom: 'Olga',
        dad: 'Pavel'
    }
};

// преобразует существующий объект в формат JSON
// console.log(JSON.stringify(person));

// console.log(JSON.parse(JSON.stringify(person)));

// !!можно сделать глубокую копию этого объекта
// преобразует существующий объект в формат JSON =>
// затем распарсит его обратно в JS объект => засунет значение в clone
// clone новый абсолютно независмый объект
const clone = JSON.parse(JSON.stringify(person));
console.log(clone);
clone.parents.mom = 'Anna';
console.log(clone);