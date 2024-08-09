$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        dots: false,
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00)00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoInterese: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor insira seu nome'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camporIncorretos = validador.numberOfInvalids();
            if (camporIncorretos) {
                alert(`Existem ${camporIncorretos} Campos incorretos`)
            }

        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})