const form = document.getElementById('form-cliente');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    

});

function adicionaLinha(){
    const inputNomeCliente =  document.getElementById('nome-cliente');
    const inputTelefoneCliente =  document.getElementById('telefone-cliente');

    if (nome.includes(inputNomeCliente.value)) {
        alert(`O Nome: ${inputNomeCliente.value} já foi inserido`); 
    } else {
        nome.push(inputNomeCliente.value);
        telefone.push(parseFloat(inputTelefoneCliente.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNomeCliente.value}</td>`;
    linha += `<td>${inputTelefoneCliente.value}</td>`;
    linha += '</tr>';
    
    linhas += linha;   
    }
    
    inputNomeCliente.value = '';
    inputTelefoneCliente.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
