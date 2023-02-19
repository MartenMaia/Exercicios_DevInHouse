let nome;
let materias = ['Geografia','Historia','Matematica','Biologia'];
let notas = [];
let media;
let statusNota;

while (true){
    nome = nome === undefined ? prompt('Digite o seu nome:') : nome;
    
    materias.forEach(materia => {
        let nota = prompt(`Digite a sua nota em ${materia}:`);
        notas.push(parseFloat(nota))
    });

    media = notas.reduce((total,nota) => total += nota);
    media = media/notas.length;

    statusNota = media >= 7 ? 'APROVADO' : 'REPROVADO';
    break
}

let divNomeNota = document.createElement('h2');
let divStatus = document.createElement('h1');
if(media >= 7){
    divStatus.classList.add('aprovado')
} else{
    divStatus.classList.add('reprovado')
}

divNomeNota.innerText = nome.toUpperCase()+" | Média:"+media;
divStatus.innerText = statusNota;

let divBody = document.querySelector('body');
divBody.appendChild(divNomeNota);
divBody.appendChild(divStatus);