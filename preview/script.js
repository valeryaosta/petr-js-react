const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');
const link = document.querySelector('a');

// btn.onclick = function (){
//     alert('click');
// }
// btn.onclick = function (){
//     alert('click2');
// }

// btn.addEventListener('click', () => {
//     alert('click');
// })
// btn.addEventListener('click', () => {
//     alert('click2');
// })

// let i = 0;
const deleteElem = (e) => {
   // e.target.remove();
    // console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if(i === 1){
    //     btn.removeEventListener('click', deleteElem);
    // }
}
// btn.addEventListener('click', deleteElem);
// overlay.addEventListener('click', deleteElem);

btns.forEach( item => {
    item.addEventListener('click', deleteElem, {once: true})
})

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
})