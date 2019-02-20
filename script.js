var calculator,
    btnOn = document.getElementById('on'),
    btnOff = document.getElementById('off'),
    numbers = Array.from(document.getElementsByClassName('number')),
    btnPlus = document.getElementById('addition'),
    btnMinus = document.getElementById('subtraction'),
    btnMultiply = document.getElementById('multiply'),
    btnDivide = document.getElementById('division'),
    btnSqrt = document.getElementById('sqrt'),
    btnRemove = document.getElementById('remove'),
    btnNegative = document.getElementById('negative'),
    screen = document.getElementById('screen');

btnOn.addEventListener('click', function () {
    calculator = new Calculator();
});

btnOff.addEventListener('click', function () {
    calculator = null;
});

numbers.forEach(function (item) {
    item.addEventListener('click', function () {
        if (calculator) {
            calculator.renderSymbol(this.innerText);
        }
    });
});

btnRemove.addEventListener('click', function () {
    if (calculator) {
        calculator.removeSymbol();
    }
});

document.addEventListener('keypress', function () {
    if (calculator) {
        var code = event.code;
        if (code.indexOf('Digit') !== -1) {
            calculator.renderSymbol(event.code.split('Digit')[1]);
        }
    }
});

function Calculator() {

    this.maxSymbols = 25;

    this.renderSymbol = function (symbol) {
        if (screen.innerText.length <= this.maxSymbols) {
            screen.innerText += symbol;
        } else {
            alert('you entered more than ' + this.maxSymbols + ' characters');
        }
    };

    this.removeSymbol = function () {
        if (screen.innerText.length) {
            screen.innerText = screen.innerText.substring(0, screen.innerText.length - 1);
        }
    };

}
