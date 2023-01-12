
const btn = document.querySelector('.btn');
let timer,
    i = 0;


function Animation() {
    const element = document.querySelector('.box'); 
    let pos = 0;

    const id =setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        }else {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';
        }
    }
}


btn.addEventListener('click', Animation());
// btn.addEventListener('click', () =>{
//     // const timer = setTimeout(log, 2000);
//      timer = setInterval(log, 1000);
// })


// function log(){

//     if( i == 5){
//         clearInterval(timer);
//     }
//     console.log('Реклама');
//     i++;    
// }

// //рекурсивный вызов setTimeout

// const timers = setTimeout(function clock(){
//     console.log("Закрыть");
//     timers = setTimeout(clock, 500);
// }, 500);    