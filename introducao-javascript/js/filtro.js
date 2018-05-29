var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function(){
    var pacientes = document.querySelectorAll('.paciente');
    
    // ForEach não funcionou para tratar essa lógica
    if (this.value.length > 0)  {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            // Em expressões regulares passamos geralmente 2 parâmetros. O primeiro o valor a ser comparado, e depois opcionalmente alguma regra
            var expression = new RegExp(this.value, "i");

            // Função .test() dos objetios RegExp testam o argumento passado para compara caracter por caracter
            if (!expression.test(nome)) {
                paciente.classList.add('invisible');
            } else {
                paciente.classList.remove('invisible');
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove('invisible');
        }
    }   
});