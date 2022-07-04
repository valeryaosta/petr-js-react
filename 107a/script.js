'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
]

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`)

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })
} catch (e) {
    if (e.name === 'SyntaxError') {
        console.log(e.message)
    } else throw e
}


const err = new Error('Some error');
// console.log(err.name, err.message, err.stack);

const err2 = new SyntaxError('Syntax error');
const err2 = new ReferenceError('Reference error');
// console.log(err2.name, err2.message, err2.stack);