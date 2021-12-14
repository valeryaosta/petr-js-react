'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
})

// console.log(box.getBoundingClientRect());
// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);
// console.log(style);
// console.log(style.display);

// эти стили у document берут через documentElement
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

// перемещения пользователя по опр координатам страницы
// window.scrollBy(0, 400);   // от текущего положения страницы
// window.scrollTo(0, 800);   // от верха окна страницы