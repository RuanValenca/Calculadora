document.getElementById('calculate').addEventListener('click', function() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var operator = document.getElementById('operator').value;
    var result;

    switch (operator) {
        case 'add':
            result = value1 + value2;
            break;
        case 'subtract':
            result = value1 - value2;
            break;
        case 'multiply':
            result = value1 * value2;
            break;
        case 'divide':
            if (value2 === 0) {
                alert('Divisão por zero não é permitida.');
                return;
            }
            result = value1 / value2;
            break;
        default:
            alert('Operador inválido.');
            return;
    }

    document.getElementById('result').value = result;
});