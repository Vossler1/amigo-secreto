//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];
let sorteado;


function adicionarAmigo() {
    let nomeInput = document.querySelector('input').value
    if(nomeInput == ''){
        alert('Voce deve digitar um nome');
    }else{
        nomes.push(nomeInput);
        document.querySelector('input').value = '';
        nomeInput.value = '';
        console.log(nomes);
        
    }
    

}
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function sortearAmigo() {
    let quantidadeDeAmigos = nomes.length;
    if(quantidadeDeAmigos == 0){
        alert('Voce deve adicionar pelo menos um amigo');
    }else{
        sorteado = nomes[parseInt(Math.random() * quantidadeDeAmigos)];
        exibirTextoNaTela('h2', `O amigo sorteado é ${sorteado}`);
    }
    
}

