//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];
let sorteado;

function adicionarAmigo() {
    let nomeInput = document.querySelector('input').value;
    let lista = document.querySelector('ul').innerHTML;
    if(nomeInput == ''){
        alert('Voce deve digitar um nome');
    } else {
        nomes.push(nomeInput);
        document.querySelector('input').value = '';
        exibirTextoNaTela('ul', `nomes cadastrados: ${nomes.join(', ')}`);
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirListaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function sortearAmigo() {
    let quantidadeDeAmigos = nomes.length;
    if(quantidadeDeAmigos == 0){
        alert('Voce deve adicionar pelo menos um amigo');
    } else {
        sorteado = nomes[parseInt(Math.random() * quantidadeDeAmigos)];
        exibirTextoNaTela('ul', `O amigo sorteado é ${sorteado}`);
    }
}
