var buttons = Array.from(document.getElementsByTagName('button'));

buttons.forEach(function(item) {
    item.addEventListener('click', function() {
        buttonClicked(this);
    });
});

function buttonClicked(button) {
    var input = button.innerText;
    switch (button.className) {
        case 'number':
            buttonNumberClicked(input);
            break;
        case 'operator':
            buttonOperatorClicked(input);
            console.log(input);
            break;
        case 'control':
            buttonControlClicked(input);
            break;
    }
}

function buttonNumberClicked(input) {
    renderSymbol(input);
}

function buttonOperatorClicked(input) {
    switch (input) {
        case '+':

            break;
        case '-':

            break;
        case '&times;':

            break;
        case '/':

            break;
        case '&radic;':

            break;
        case '\&#8656;':
            clearSymbol();
            break;
        case '+/-':

            break;
    }
}

function buttonControlClicked(input) {

}

function renderSymbol(symbol) {
    var screen = document.querySelector('.screen');
    screen.innerText += symbol;
}

function clearSymbol() {
    var screen = document.querySelector('.screen'),
        current = screen.innerText;
    screen.innerText = current.substring(0, current.length - 1);
}

