'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'aqua';
box.style.width = '450px';
btns[1].style.borderRadius = '95%';
circles[2].style.backgroundColor = 'aquamarine'

let num = 300;
// box.style.cssText = `background-color: gold; width: ${num}px;`;
box.style.cssText = 'background-color: gold; width: 400px; border-radius: 100%';

// for (let i = 0; i < hearts.length; i++ ) {
//     hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach( item => {
    item.style.backgroundColor = 'blue'
})

const div = document.createElement('div');
div.classList.add('black');

// in the end
wrapper.append(div);

//at the very beginning
// wrapper.prepend(div);
//hearts[0].before(div);
//hearts[1].after(div);
//circles[0].remove();
//hearts[0].replaceWith(circles[1])

// div.innerHTML ='Hola hola';
div.innerHTML ='<h1>Hola hola</h1>';
//only text data, no markup inside!
//div.textContent = 'Heeey';

div.insertAdjacentElement("afterend", '<h3>HoHoHo</h3>');

