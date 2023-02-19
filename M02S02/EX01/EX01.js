let callPrompt = window.prompt("Digite o seu nome: ");
console.log(callPrompt);
let novaDiv = document.createElement('div');
novaDiv.innerText = callPrompt;
document.querySelector('body').appendChild(novaDiv);