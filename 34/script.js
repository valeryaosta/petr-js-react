// touchstart
// touchend
// touchmove
// touchenter
// touchleave
// touchcancel

// touches
// targetTouches
// changedTouches

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.changedTouches);
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
        console.log(e.targetTouches[0].pageX);
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
})


