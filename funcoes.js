
function cliqueSoma(valor1, valor2) {
    //pega os valores do campo de texto e converte para n° decimal e armazena nas variaveis
    valor1 = parseFloat(document.getElementById('txtA').value);
    valor2 = parseFloat(document.getElementById('txtB').value);

    //verifica se os campos de texto estão vazios, caso esteja irá aparecer um alert
    if (document.getElementById('txtA').value == '' || document.getElementById('txtB').value == '') {
        alert('Preencha os campos corretamente')
    } else {
        //paga os valores das variaveis, faz a soma e aprensenta na tela na tag p id resultado
        document.getElementById('resultado').innerHTML = (valor1 + valor2).toFixed(1);
    }
}

function cliqueSubtracao(valor1, valor2) {


    valor1 = parseFloat(document.getElementById('txtA').value);
    valor2 = parseFloat(document.getElementById('txtB').value);

    if (document.getElementById('txtA').value == '' || document.getElementById('txtB').value == '') {
        alert('Preencha os campos corretamente')
    } else {
        //paga os valores das variaveis, faz a subtração e aprensenta na tela na tag p id resultado
        document.getElementById('resultado').innerHTML = (valor1 - valor2).toFixed(1);
    }
}

function cliqueDivisao(valor1, valor2) {


    valor1 = parseFloat(document.getElementById('txtA').value);
    valor2 = parseFloat(document.getElementById('txtB').value);

    if (document.getElementById('txtA').value == '' || document.getElementById('txtB').value == '') {
        alert('Preencha os campos corretamente')
    } else {
        document.getElementById('resultado').innerHTML = (valor1 / valor2).toFixed(1);
    }
}

function cliqueMultiplicacao(valor1, valor2) {


    valor1 = parseFloat(document.getElementById('txtA').value);
    valor2 = parseFloat(document.getElementById('txtB').value);

    if (document.getElementById('txtA').value == '' || document.getElementById('txtB').value == '') {
        alert('Preencha os campos corretamente')
    } else {
        document.getElementById('resultado').innerHTML = (valor1 * valor2).toFixed(1);
    }
}