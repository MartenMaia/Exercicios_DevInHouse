let novaTag = document.createElement('h3');
let body = document.querySelector('body');

for (let i = 0; i <= 10; i++) {
    let valor = 5*i;
    novaTag.innerText += ("5 x "+i+" = "+valor+"\n");
    body.appendChild(novaTag);
}

body.appendChild(novaTag);