//Este código serve como opção utilizando um laço de repetição for
function tocaSom (seletorAudio) {
    document.querySelector(seletorAudio).play();
}

    

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
        }

    tecla.onkeydown = function (evento) {
        console.log(evento);
        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

/* o button já tem uma navegação pelo teclado por padrão, por isso se apertar enter e espaço ele irá fazer
o evento de click. para entrar nessa tecla temos o evento on nele teremos o onkeydown (quando a tecla estiver clicada)
 o problema dessa incerçao de classe, a classe está ativa e então qualquer tecla criará esse
 evento de deixar tudo ativo, nos precisamos fazer um código para remover essa classe quando 
 ela não estiver mais ativa, ou seja assim que for teclado. e o valor que vamos atribuir é uma função 

 No onkeydown nos precisamos deixar ativa com uma condição, nos queremos apenas a barra e não qualquer tecla
 essa condição vamos usar a estrutura condicional o if (se). 

 se (dada condição for verdadeira) {faça esse trecho de código}
No JS temos um recurso que a linguagem fornece para trabalhar com eventos, que fornece para todas as funções ligadas 
a um evento. Agora ao invermos de ter uma função anonima no onkeydown, especificaremos para essa função o parametro
na qual desejamos que ela faça esse evento

*/