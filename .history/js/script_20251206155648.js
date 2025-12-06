const tempo = document.getElementById('time');
let contador = 0;
let timer = 0;

const formata =(time)=>{
const hora = Math.floor(time/360000);
const minutos = Math.floor((time %360000)/6000);
const segundos = Math.floor(time%6000)/100;
const ms = time %100;
re
};