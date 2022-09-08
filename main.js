function tocaSom (idAudio) {
        document.querySelector(idAudio).play();
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
        tocaSom();
    }

    contador = contador + 1;
}


/*
Toca som recebe um id de um elemento que vai ser bucado pelo query selector e vai ser reproduzido pela função play
esa função toca som está sendo acessada pelo laço de repetição while que acessa cada tecla do projeto, no caso 9,
utilizando a variável que conta as repetições para acessar o índice que pega um determinado elemento das teclas.
E a cada elemento ele pega acessado pelo click  onclick e atribuir uma função anonima que acessa o tocaSom. 

Cada tag audio tem um id sendo o final do nome dessa id direcionado para um áudio específico, mas sabemos
que nos buttons nos podemos acessa-los individualmente através da constante que criamos listaDeTeclas atrinuindo um
valor de contador que é declarado como sendo ele + 1 e também atribuindo a classList a partir do primeiro item da lista
dos botões.

Lembrando que a partir das classes do button vamos fazer um texto dinamico para acessar os audios
Se observarmos a listaDeTeclas[0] + o atributo .classList no console do navegador nos retorna toda 
a lista dos botoes. A partir disso vamos declarar como uma constante instrumento para essa lista. 

Para diminuirmos nosso código e deixa-lo mais semânctico na listaDeTeclas[contador] podemos atribuir a ela uma
constante chamada apenas tecla e o valor atribuido a ela será o mesmo listaDeTeclas[contador]

const teclas = ListaDeTeclas[contador]

Assim nosso código muda

Disso const instrumento = listaDeTeclas[contador].classList[1];
Para isso const instrumento = tecla.classList[1];

E 

Disso 

listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_pom');
    }

Para isso 

tecla.onclick = function () {
        tocaSom('#som_tecla_pom');
    }

Agora precisamos do id correto para acessar o som e não só a #som_tecla_pom, para isso vamos 
usar uma string de um pseudo código algo como `#som_{instrumento}` isso faz com que os áudios 
que tenham esse id em comum se associem a vriável instrumento que é dinâmica e acessa
uma lista já declarada + o contador.

Para isso vamos criar outra constante chamada idAudio em que ela recebe uma Template String que é envolvida com crase
para receber a parte dinâmica do código. A template string recebe o ${} que faz uma abertura
para o código JavaScript de dentro da string para acessar métodos, varáveis ou até mesmo fazer contas.
Repare que a cor do código após o ${} muda.

const idAudio = `#som_${instrumento}`

Para verificar podemos fazer um console.log da const idAudio e da const instrumento
e assim verificar a lista a qual essas constantes represemtam no navegador.

Observe que nossa primeira função recebe um parametro chamado idAudio e essa função acessa
todos os áudios que estão com a #som como id e executa eles através da função play().
Sendo assim nos já atribuimos um valor para esse parametro declarando a constante idAudio que é
a nossa template string. 

Então nossa função anonima que acessa o onclick receberá a função tocaSom com parametro de idAudio

tecla.onclick = function () {
        tocaSom(idAudio);
    }

Agora o evento está pronto, sempre que clicarmos na tecla ele irá emitir o seu áudio específico.





*/