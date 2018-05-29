var botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) { // Status 200 representa uma conexão bem sucedida
            erroAjax.classList.add('invisible');

            var resposta = xhr.responseText; // Transforma o arquivo da API em texto
            var pacientes = JSON.parse(resposta); // Converte o arquivo JSON para uma array de JavaScript

            pacientes.forEach( function(paciente) {
                addPacientes(paciente);
            });
        } else {
            erroAjax.classList.remove('invisible');
        }

        // Nota: Não há limite de requisições, serão feitas tantas vezes quanto clicadas no botão
    });
    
    // A API é carregada apenas se o metodo .send() for utilizado
    xhr.send();
});