function tocaSom (audiosDoApp) {
        document.querySelector(audiosDoApp).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    
    
    const instrumento = tecla.classList[1];
   //console.log(instrumento);
  
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento);
        if (evento.code === 'Space') {
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    contador = contador + 1;
}

