'use strict';


// выдает какой-то результат последовательно через yield
function* generator() {
    yield 'S';
    yield 'C';
    yield 'R';
    yield 'I';
    yield 'P';
    yield 'T';
}

const str = generator();
console.log(str.next().value);

function* count(n) {
    for (let i = 0; i < n; i++){
        yield i;
    }
}

const counter = count(7);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

// если нужно запустить ф-цию генератор автоматически максимальное кол-во раз
for (let k of count(7)) {
    console.log(k)
}
