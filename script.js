const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const resultado = document.querySelector('#resultado');

function calcularIMC () {

    let imc = (peso.value / (altura.value * altura.value)).toFixed(2);

    let classificacao = '';
    
    if(imc < 18.5){
        classificacao = "Você está abaixo do peso.";
    } else if (imc < 25){
        classificacao = "Você está no peso normal.";
    } else if (imc < 30){
        classificacao = "Você está acima do Peso.";
    } else if (imc < 35){
        classificacao = "Você está com Obesidade Grau I.";
    } else if (imc < 41){
        classificacao = "Você está com Obesidade Grau II.";
    } else {
        classificacao = "Você está com Obesidade Grau III.";
    }  
    
    resultado.innerHTML = `Seu IMC é ${imc}, ${classificacao}`;
}




