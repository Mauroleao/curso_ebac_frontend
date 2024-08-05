$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();
        adicionaTarefa();
    });

    function adicionaTarefa() {
        const inputTarefa = $('#tarefa');

        if ($.trim(inputTarefa.val()) !== '') {
            const li = $('<li></li>').text(inputTarefa.val());
            li.on('click', function() {
                $(this).toggleClass('strikethrough');
            });
            $('#lista-tarefas').append(li);

            inputTarefa.val('');
        }
    }
});
