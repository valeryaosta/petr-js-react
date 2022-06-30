'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

// найти что совпадает с классом this
boxesQuery.forEach(box => {
    if(box.matches('.this')) {
        console.log(box)
    }
})

// найти первый элемент с селектором, кот будет у тебя родителем
console.log(boxesQuery[0].closest('.wrapper'));



// boxesQuery[0].remove(); // NodeList(3)
// boxesGet[0].remove(); // HTMLCollection (div.box)
//
// // for (let i = 0; i < 5; i++) {
// //     const div = document.createElement('div');
// //     div.classList.add('box');
// //     document.body.append(div);
// // }
//
//
// console.log('boxesQuery', boxesQuery); // NodeList(3) , узлы // статичная коллекция
// console.log('boxesGet', boxesGet); // HTMLCollection(3), элементы // живая коллекция (следит за всеми изм. в дом-дереве. тек состояние)
// // console.log(document.body.children); // HTMLCollection(4), посл идет сам script, элементы
// // оба псевдомассива,но сформированы по-разному и имеют разн функционал
//
// console.log(Array.from(boxesGet)); // это обычн массив.а не коллекция


