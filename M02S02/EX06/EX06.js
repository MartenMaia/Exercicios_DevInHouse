let peso = parseFloat(prompt("Digite o seu peso: "));
let altura = parseFloat(prompt("Digite a sua altura: "));

let IMC = peso/(altura*altura);
let texto;

if(IMC >= 25.0){
    texto = IMC+" de IMC - Você está acima do peso, procure um médico";    
} else if( 18.5 <= IMC && IMC < 25.0){
    texto = "PARABÉNS!! Você está no peso ideal"
} else{
    texto = "Você está abaixo do peso, procure um médico.";
};

alert(texto)
    document.querySelector('body').innerText = texto;