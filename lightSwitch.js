console.log('lightSwitch.js is ready for action')

let btn = document.querySelector('.lightSwitchBtn');
let licht =document.querySelector('.licht');

// let dust = document.querySelector('#dust');

        licht.style.background = "linear-gradient(to right,rgba(0, 0, 0, 0.853) 15%, rgba(100, 0, 0, 0.295),rgba(0, 0, 0, 0.853) 85%)";
        dust.style.display = 'none';

btn.onclick = ()=>{
    console.log('knopft')
    if(dust.style.display === 'none'){
    dust.style.display = 'block';
    licht.style.background = 'linear-gradient(to right,rgba(0, 0, 0, 0.853) , rgba(255, 0, 0, 0.295), rgba(58, 216, 255, 0.37), rgba(255, 0, 200, 0.521),rgba(0, 0, 0, 0.853) )'; 

    }else{
        dust.style.display = 'none';
        licht.style.background = "linear-gradient(to right,rgba(0, 0, 0, 0.853) , rgba(100, 0, 0, 0.295),rgba(0, 0, 0, 0.853) )";
    };
}
