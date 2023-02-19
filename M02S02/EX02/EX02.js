let nome = window.prompt('Digite o seu nome: ');
let email = window.prompt('Digite o seu e-mail');

let tagNome = document.createElement('h4');
let tagEmail = document.createElement('h4');

tagNome.innerText = nome;
tagEmail.innerText = email;

let tagBody = document.querySelector('body');

tagBody.appendChild(tagNome);
tagBody.appendChild(tagEmail);