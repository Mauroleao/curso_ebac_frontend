const form = document.getElementById('form-envio');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let formEValido = false;

function validaCampos(a, b) {
    return b > a;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);
    const mensagemSucesso = `O Segundo Valor: <b>${valorB}</b> é maior que o primeiro: <b>${valorA}</b>.`;

    formEValido = validaCampos(valorA, valorB);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
        
        document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
    } else {
        campoA.style.border = '1px solid red';
        campoB.style.border = '1px solid red';
        document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'block');
    }
});

[campoA, campoB].forEach(field => {
    field.addEventListener('input', function() {
        const valorA = parseFloat(campoA.value);
        const valorB = parseFloat(campoB.value);
        formEValido = validaCampos(valorA, valorB);

        if (!formEValido) {
            campoA.classList.add('error');
            campoB.classList.add('error');
            document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'block');
        } else {
            campoA.classList.remove('error');
            campoB.classList.remove('error');
            document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
        }
    });
});
