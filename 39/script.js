// const timerId = setTimeout(function() {
//     console.log('hello');
// }, 2000);
// timerId();

// const timerId2 = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');
// timerId2();


// const timerId3 = setTimeout(logger, 2000);
// timerId3();

// setTimeout(logger, 3000);

// const timerId3 = setTimeout(logger, 2000);
// clearInterval(timerId3);

// const logger = () => {
//     if(i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

const btn = document.querySelector('.btn');
let timerId;
let i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if(pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// })
// clearInterval(timerId);

// let id = setTimeout(function log(){
//     console.log('hey');
//     id = setTimeout(log, 500);
// }, 500)
