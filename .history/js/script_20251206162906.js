const tempo = document.getElementById('time');
let contador = 0;
let tempoA = 0;

const formatar = (time) => {
    const hora = Math.floor(time / 360000);
    const minutos = Math.floor((time % 360000) / 6000);
    const segundos = Math.floor(time % 6000) / 100;
    const ms = time % 100;
    return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}:`;
};

const elementos = () => {
    const button = document.getElementById('inicio');
    const accao = document.getAttribute('start');

    clearInterval(contador);

    if (accao == 'start' || accao == 'continue') {
        contador = setInterval(() => {
            tempo += 1;
            inserir(tempoA)
        }, 10);
        button.setAttribute('accao', 'p')
    }
};


//Funcao para enviar a contagem na tela.
const inserir = () => {
    tempo.innerText = formatar(time);
}