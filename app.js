let ListaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate:1.2});
}

function exibirMensagemInicial() {

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10 ');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativas = `Voce descobriu o Número Secreto com ${tentativas} ${palavratentativa}`;
        exibirTextoNaTela('p',mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }    else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p','Número Secreto é menor');
             } else {
                    exibirTextoNaTela('p','Número Secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}



function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = ListaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        ListaDeNumerosSorteados = [];
    }
    
    if (ListaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
     } else {
        ListaDeNumerosSorteados.push(numeroEscolhido)
        console.log(ListaDeNumerosSorteados)
        return numeroEscolhido

     }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable', true)
 }







