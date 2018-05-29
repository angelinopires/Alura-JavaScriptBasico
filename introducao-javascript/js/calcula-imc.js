var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var pesoBool = validatePeso(peso);
    var alturaBool = validateAltura(altura);
    
    if (!pesoBool) {
        pesoBool = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add('paciente-invalido');
    } 
    
    if (!alturaBool) {
        alturaBool = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add('paciente-invalido');
    }
    
    if (pesoBool && alturaBool) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validatePeso(peso) {
    if (peso > 0 && peso <= 400) {
        return true;
    }
}

function validateAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    }
}