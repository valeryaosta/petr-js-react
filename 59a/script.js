'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1990',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`)
    }
}

// Object.entries() возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]
const userMap = new Map(Object.entries(user));
console.log('userMap', userMap);

// fromEntries() из массивоподобного объекта создает объект
const newUserObject = Object.fromEntries(userMap);
console.log('newObj', newUserObject);

//
// console.log(typeof(Object.keys(user)[0]));  // 4 == string,в формате не числа. а строки

const shops = [
    {rice: 500},
    {oil: 500},
    {bread: 50},
]

const budget = [5000, 15000, 25000];

const map = new Map([
    [{milk: 100}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i])
})
console.log('map', map);

// map.set(shops[0], 5000)   // изляшняя большая запись лучше forEach
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);


console.log(map.get(shops[0]));
console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
// map.keys()


// const goods = []
// for(let shop of map.keys()){
//     goods.push(Object.keys(shop)[0])
// }
// console.log(goods)

// for(let price of map.values()){
//     console.log(price)
// }

// массив с элементом и бюджетом
// for(let [shop, price] of map.entries()){
//     console.log(shop, price)
// }

// map.forEach((value, key, map) => {
//     console.log(key, value)
// })
