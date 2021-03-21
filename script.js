let resultadoChamado = false


// Conferindo se o valor é um operador
function isOperador(valor) {
    const operadores = ['+', '-', '*', '/', '.', '**']
    valorIsOperador = false
    for (let i in operadores) {
        if (valor == operadores[i]) {
            valorIsOperador = true
        }
    }

    return valorIsOperador
}


// Inserindo valores
function inserir(valor) {
    if (resultadoChamado) {
        document.getElementById('calculo').value = ""
    }

    const texto = document.getElementById('calculo').value

    if (!isOperador(valor)) {
        document.getElementById('calculo').value += valor
    } else {

        if (!(texto == '' || isOperador(texto[texto.length - 1]))) {
            document.getElementById('calculo').value += valor
        }

    }

    resultadoChamado = false

}


// Apagando um valor
function apagar() {
    const texto = document.getElementById('calculo').value

    if (texto.substring(texto.length-2, texto.length) == '**') {
        document.getElementById('calculo').value = texto.replace(texto.substring(texto.length-2, texto.length), '')
    } else {
        document.getElementById('calculo').value = texto.replace(texto[texto.length-1], '')
    }

    
}


// Apagando todos os valores
function apagarTudo() {
    document.getElementById('calculo').value = ''
}


// Retornando resultado
function resultado() {
    let resultado
    try {
        resultado = eval(document.getElementById('calculo').value)
    } catch {
        resultado = "ERRO!"
    }

    resultadoChamado = true

    document.getElementById('calculo').value = resultado
}