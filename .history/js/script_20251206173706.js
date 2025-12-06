const tempo = document.getElementById('time');
let contador = 0;
let tempoA = 0;

const formatar = (time) => {
    const hora = Math.floor(time / 360000);
    const minutos = Math.floor((time % 360000) / 6000);
    const segundos = Math.floor((time % 6000) / 100);
    const ms = time % 100;
    return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}:`;
};

const elementosA = () => {
    const button = document.getElementById('inicio');
    const accao = button.getAttribute('action');

    clearInterval(contador);

    if (accao == 'start' || accao == 'continue') {
        contador = setInterval(() => {
            tempoA += 1;
            inserir(tempoA)
        }, 10);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else if (accao == 'pause') {
        clearInterval(contador);
        button.setAttribute('action', 'continue');
        button.innerHTML = '<i class="fa-solid fa-play"></i>';

    }
};


//Funcao para enviar a contagem na tela.
const inserir = (valor) => {
    tempo.innerText = formatar(valor);
}
const limpar = () =>{
    cle
}
document.getElementById('inicio').addEventListener('click', elementosA);