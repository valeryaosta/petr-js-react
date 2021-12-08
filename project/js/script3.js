/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const promoImages = document.querySelectorAll('.promo__adv img');
const poster = document.querySelector('.promo__bg');
const newGenre = poster.querySelector('.promo__genre');
const promoList = document.querySelector('.promo__interactive-list')

// 1
promoImages.forEach(i => {
    i.remove();
});
// 2
newGenre.innerHTML = 'Драма';
// newGenre.textContent = 'Драма';
// 3
poster.style.backgroundImage = 'url("img/bg.jpg")'
//4
promoList.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    promoList.innerHTML += `
         <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
         </li>
    `;
})