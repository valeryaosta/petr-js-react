"use strict";

console.log('request for data');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('waiting for data');

        const product = {
            name: 'tv',
            price: '2000'
        };

        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000)
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('some mistake');
}).finally(() => {
    console.log('finally');
});


// _____________


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time)
    })
};

test(1000).then( () => console.log('1000 ms'));
test(2000).then( () => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('all');
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('race');
});
