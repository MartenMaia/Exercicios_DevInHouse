let n1 = prompt("Digite o primeiro numero:");
let n2 = prompt("Digite o segundo numero:");

let soma = parseInt(n1) + parseInt(n2);

let novaResultado = document.createElement('h2');
document.querySelector('body').innerText = "A soma dos numeros "+n1+" e "+n2+" é "+soma;