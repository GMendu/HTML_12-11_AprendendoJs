const calc = document.querySelector('#p1');
const calc2 = document.querySelector('#p2')
const result = document.querySelector('#p3')
calc.addEventListener('click', atualizarX);
calc2.addEventListener('click', atualizarY);

var x = 0;
var txtx = calc.textContent
var y = 0;
var txty = calc2.textContent
var z = 0;
var txtz = result.textContent

function atualizarX() {
    x = prompt('Insira um número');
    calc.textContent = txtx + x;
    atualizarZ();
}

function atualizarY() {
    y = prompt('Insira um número');
    calc2.textContent = txty + y;
    atualizarZ();
}

function atualizarZ() {
    z = +x + +y
    result.textContent = txtz + z;
}