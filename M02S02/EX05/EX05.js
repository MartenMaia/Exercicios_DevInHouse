let numero = prompt("Digite um numero: ");

let info = parseInt(numero)%2 == 0 ? "Par" : "Impar";

let tag = document.createElement('h2');
tag.innerText = info;
document.querySelector('body').appendChild(tag);