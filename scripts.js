function insert(num) {
    document.querySelector('div#resultado').innerHTML = num
}

function escuro() {
    document.querySelector('div#calculadora').style.backgroundColor = 'rgba(36, 35, 35, 0.9)'

    
}

function claro() {
    document.querySelector('div#calculadora').style.backgroundColor = 'rgba(233, 230, 230, 0.9)'
}