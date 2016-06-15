function validateForm1() {

    var checked = null;
    var inputs = document.getElementsByName('a');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            checked = inputs[i];
            break;
        }
    }
    if (checked == null) {
        alert('Por favor escolha uma opção');
        return false;
    }

    if (checked.value == 'Triangulo') {
                
        alert('Você acertou!');
        return false;
    } else {
        return confirm('Você errou!');
    }
}

function validateForm2() {

    var checked = null;
    var inputs = document.getElementsByName('b');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            checked = inputs[i];
            break;
        }
    }
    if (checked == null) {
        alert('Por favor escolha uma opção');
        return false;
    }

    if (checked.value == 'Quadrado') {
        alert('Você acertou!');
        return false;
    } else {
        return confirm('Você errou!');
    }
}

function validateForm3() {

    var checked = null;
    var inputs = document.getElementsByName('c');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            checked = inputs[i];
            break;
        }
    }
    if (checked == null) {
        alert('Por favor escolha uma opção');
        return false;
    }

    if (checked.value == 'Circulo') {
        alert('Você acertou!');
        return false;
    } else {
        return confirm('Você errou!');
    }
}


function validateForm4() {

    var checked = null;
    var inputs = document.getElementsByName('d');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            checked = inputs[i];
            break;
        }
    }
    if (checked == null) {
        alert('Por favor escolha uma opção');
        return false;
    }

    if (checked.value == 'Retangulo') {
        alert('Você acertou!');
        return false;
    } else {
        return confirm('Você errou!');
    }
}


function createArray() {
    
    var formElements = window.document.getElementById("meuForm").elements;
    var formElement;
    var radioArray = [];

    for (var i = 0, j = 0; i < formElements.length; i++) {
        formElement = formElements.item(i);
        if (formElement.type === "radio" && formElement.name === "a" || formElement.name=="b" || formElement.name=="c" || formElement.name=="d" ) {
            radioArray[j] = formElement;
            ++j;
        }
    }


}