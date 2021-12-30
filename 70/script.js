'use strict';

const number = 1;

// 1 - IIFE
(function (){
    let number = 2;
    console.log(number);
    console.log(number + 3);
}())

console.log(number);

//
const user = (function(){
    const privat = function () {
        console.log('Privat function')
    };
    return {
        sayHello: privat
    }
}());
user.sayHello();