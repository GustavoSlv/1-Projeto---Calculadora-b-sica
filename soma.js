/*Função dos botões */ /*FALTA FAZER OS BOTÕES FUNCIONAR*/
 
 function somaDosValores(num1,num2){
    num1 = prompt('Digite o primeiro valor: ');
    num1 = parseInt(num1);
    num2 = prompt('Digite o segundo valor: ')
    num2 = parseInt(num2);

    resultado = num1 + num2;

    return alert(`A soma dos valores é ${resultado}`);
}

function subtracaoDosValores(num1,num2){
    num1 = prompt('Digite o primeiro valor: ');
    num1 = parseInt(num1);
    num2 = prompt('Digite o segundo valor: ')
    num2 = parseInt(num2);

    resultado = num1 - num2;

    return alert(`A subtração dos valores é ${resultado}`);
}


function multiDosValores(num1,num2){
    num1 = prompt('Digite o primeiro valor: ');
    num1 = parseInt(num1);
    num2 = prompt('Digite o segundo valor: ')
    num2 = parseInt(num2);

    resultado = num1 * num2;

    return alert(`A multiplicação dos valores é ${resultado}`);
}


function divisaoDosValores(num1,num2){
    num1 = prompt('Digite o primeiro valor: ');
    num1 = parseInt(num1);
    num2 = prompt('Digite o segundo valor: ')
    num2 = parseInt(num2);

    resultado = num1 / num2;

    return alert(`A divisao dos valores é ${resultado}`);
}

somaDosValores()
subtracaoDosValores()
multiDosValores()
divisaoDosValores()