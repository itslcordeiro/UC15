const resultado = document.querySelector(".result")
const confirmar = document.querySelector(".igual")

function insert(valor) {
    resultado.innerHTML += valor
}

function clean() {
    resultado.innerHTML = "";
}

function backspace() {
    if (resultado.textContent) {
        let result = resultado.getElementById("resultado").innerHTML
        resultado.innerHTML = result.substring(0, result.lenght -1);
    }
}

function confirma() {
    if (resultado.textContent != "Erro") {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
        
    }
}