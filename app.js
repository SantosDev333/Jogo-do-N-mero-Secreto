//Variáveis
let listaDeNumeros = [];
let maxNum = 10;

//funções principais
function numSecretGerar() {
    
    let sorteado = parseInt(Math.random() * maxNum + 1);
    let elementosDaLista = listaDeNumeros.length;

    if(elementosDaLista == maxNum){

        listaDeNumeros = [];

    }

    if(listaDeNumeros.includes(sorteado)){

        return numSecretGerar();

    }

    else{

        listaDeNumeros.push(sorteado);
        console.log(listaDeNumeros);
        return sorteado;

    }

}
function mostrarTexto(teg, texto){
 
    let campo = document.querySelector(teg);
    campo.innerHTML = texto;

}
function limparCampo() {
    
    chute = document.querySelector('input');
    chute.value = '';
}
function msgInicial(){

    //Titulo do jogo
    mostrarTexto('h1', 'Jogo da adivinhação!');
    //Instrução do jogo
    mostrarTexto('p', 'Escolha um número entre 1 e 10!');

}
function reiniciarJogo() {

    numSecret = numSecretGerar();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

//Variáveis
let numSecret = numSecretGerar();
let tentativas = 1;

//Titulos do jogo
msgInicial();

//Chute do usuário
function verificarChute(){

    let chute = document.querySelector('input').value;
    let SP = tentativas > 1 ? 'tentaivas' : 'tentativa';
    
    if(chute == numSecret){

        mostrarTexto('h1', 'ACERTOU!!');
        mostrarTexto('p', `Você acertou com ${tentativas} ${SP}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{

        if(chute > numSecret){

            mostrarTexto('p', 'O número secreto é menor!');

        }else{

            mostrarTexto('p', 'O número secreto é maior!');

        }

        tentativas++;
        limparCampo();
    }   
}



