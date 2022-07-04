'use strict';

let user = {name: 'Ivan'};
const arr = [user]; // объект передается по ссылочной системе

let map = new Map();
map.set(user, 'data');

user = null;

console.log(user);
console.log(map.keys());
// console.log(arr[0]);

// weakMap - ключи только объекты
// weakMap - если нет ссылки на объект и он сущ только внутри weakMap, то этот объект будет удален
// set, get, delete, has - только эти методы доступны для weakMap

let user2 = {name: 'Ivan'};
let map2 = new WeakMap();
map2.set(user2, 'data');
user2 = null;

console.log(map2.has(user2));


let cache = new WeakMap();

function cacheUser(someUser) {
    if (!cache.has(someUser)) {
        cache.set(someUser, Date.now())
    }

    return cache.get(someUser)
}


let lena = {name: 'Elena'};
let alex = {name: 'ALex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));


// weakSet - в коллекцию можем добавлять только объекты!
// weakSet - если нет ссылки на объект и он сущ только внутри weakMap, то этот объект будет удален
// add, delete, has - только эти методы доступны для weakSet

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: 'Blabla', from: 'Tiana'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log(readMessages.has(messages[0])); // true
console.log(readMessages.has(messages[1])); //true
console.log(readMessages.has(messages[2]));  // false

messages.shift();

console.log(readMessages.has(messages[0])); // false


