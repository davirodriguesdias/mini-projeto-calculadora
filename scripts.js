function insert(op) {
    
    var ope = document.querySelector('div#resultado').innerHTML;

    document.querySelector('div#resultado').innerHTML = ope + op
}

function clean() {
    document.querySelector('div#resultado').innerHTML = ''
}

function calcular() {
    var resultado = document.querySelector('div#resultado').innerHTML
    
    if(resultado) {
        document.querySelector('div#resultado').innerHTML = eval(resultado)
    } else {
        document.querySelector('div#resultado').innerHTML = 'ERRO'
    }
}

function back() {
    resultado = document.querySelector('div#resultado').innerHTML

    document.querySelector('div#resultado').innerHTML = resultado.substring(0,resultado.length -1)
}

function escuro() {
    document.querySelector('div#calculadora').style.backgroundColor = 'rgba(36, 35, 35, 0.9)'
}

function claro() {
    document.querySelector('div#calculadora').style.backgroundColor = 'rgba(233, 230, 230, 0.9)'
}

function rosa() {
    document.querySelector('div#calculadora').style.backgroundColor = 'pink'
}

function amarelo() {
    document.querySelector('div#calculadora').style.backgroundColor = 'rgb(236, 236, 115)'
}

