console.log('lightSwitch.js is ready for action')

let btn = document.querySelector('.lightSwitchBtn');
let licht =document.querySelector('.licht');

// let dust = document.querySelector('#dust');

        licht.style.background = "linear-gradient(to right,black, rgba(100, 0, 0, 0.295),black)";
        dust.style.display = 'none';

btn.onclick = ()=>{
    console.log('knopft')
    if(dust.style.display === 'none'){
    dust.style.display = 'block';
    licht.style.background = 'linear-gradient(to right,black, rgba(255, 0, 0, 0.295), rgba(58, 216, 255, 0.37), rgba(255, 0, 200, 0.521),black)'; 

    }else{
        dust.style.display = 'none';
        licht.style.background = "linear-gradient(to right,black, rgba(100, 0, 0, 0.295),black)";

    };
}
