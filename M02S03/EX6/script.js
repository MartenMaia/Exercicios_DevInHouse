
let playlist = [
{
    nome: "Listen to your heart",
    cantor:"Roxette"
},
{
    nome: "Bloody Mary",
    cantor:"Lady Gaga"
},
{
    nome: "Bones",
    cantor:"Imagine Dragons"
},
{
    nome: "Sugar honey ice and tea",
    cantor:"Bring me the horizon"
},
{
    nome: "Rock you like a hurricane",
    cantor:"Scorpions"},
{
    nome: "Pure/Honey",
cantor:"Beyoncé"}
];

localStorage.playlist = JSON.stringify(playlist);

let tabela = document.createElement('TABLE');
tabela.insertRow(0).innerHTML = "<th>Nome</th><th>Cantor</th>"

const tamanho = JSON.parse(localStorage.playlist).length



for (let index = 0; index < tamanho; index++) {
    let item = JSON.parse(localStorage.playlist)
    let nome = item[index]['nome'];
    let cantor = item[index]['cantor'];
    tabela.insertRow(index+1).innerHTML = `<td>${nome}</td><td>${cantor}</td>`    
}

let divBody = document.querySelector("body");
divBody.appendChild(tabela);