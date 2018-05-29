var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(e) {
    // Previnir o comportamento padrao dos forms que é atualizar a página
    e.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = getFormPacient(form); // Cria um objeto com os pacientes
     
    var erros = validatePaciente(paciente);

    if (erros.length > 0) {
        showErrorMessage(erros);
        return;
    }

    addPacientes(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

// Cria uma objeto com as caracteristicas passadas pelo form
function getFormPacient(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function buildTr(paciente) {
    // metodo createElement cria elementos html atraves de javascript
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    // Metodo appendChild aloca elementos como filhos de outro elemento html
    pacienteTr.appendChild(buildTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(buildTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(buildTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(buildTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(buildTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function buildTd(valor, classe) {
    var td = document.createElement("td");
    td.textContent = valor;
    td.classList.add(classe);

    return td;
}

function validatePaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) erros.push("O campo do nome não pode ser vazio!"); 
    if (!validatePeso(paciente.peso)) erros.push("Peso inválido!");
    if (!validateAltura(paciente.altura)) erros.push(" Altura inválida!");
    if (paciente.gordura.length == 0) erros.push("O campo da gordura não pode ser vazio!");

    return erros;
}

function showErrorMessage(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function addPacientes(paciente) {
    var pacienteTr = buildTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}