const date = document.querySelector('.dateid');
const hour = document.querySelector('.hourid');
const mins = document.querySelector('.minsid');
const sec = document.querySelector('.secid');
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const p = document.querySelector('#p');

function showtime(){
    let d = new Date();
    date.innerHTML = d.getDate();
    document.querySelector('.monthid').innerHTML = months[d.getMonth()];
    
    hour.textContent = d.getHours();
    if(hour.textContent>12){
        hour.textContent-=12;
    }
    mins.textContent = d.getMinutes();
    sec.textContent = d.getSeconds();

    document.getElementById('p').style.fontSize('5px') ;
}

var clock = setInterval( showtime,1000 );

window.addEventListener('load',showtime);
