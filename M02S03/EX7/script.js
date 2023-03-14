
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

async function del(posicao) {
    const confirmacao = alert('desejas mesmo deletar esta musica?')
    if(confirmacao){
        return null
    }
    let novaBase = []; 
    let base = JSON.parse(localStorage.playlist)
    for (let index = 0; index < base.length; index++) {
        if(index == posicao){
            continue
        }
        novaBase.push(base[index])
    }

    localStorage.playlist = JSON.stringify(novaBase);
    carregarBase(true)
    return await novaBase;
}

function carregarBase(bool){
    if(bool){
        document.querySelector('body').innerHTML = "<div></div>"
    }

    let tabela = document.createElement('TABLE');
    tabela.setAttribute("id","tabela")
    
    
    tabela.insertRow(0).innerHTML = "<th>Nome</th><th>Cantor</th><th>Ação</th>"

    const tamanho = JSON.parse(localStorage.playlist).length

    for (let index = 0; index < tamanho; index++) {
        let item = JSON.parse(localStorage.playlist)
        let nome = item[index]['nome'];
        let cantor = item[index]['cantor'];
        tabela.insertRow(index+1).innerHTML = `<td>${nome}</td><td>${cantor}</td><td><button onclick="del(${index})">🗑️</button></td>`    
    }

    let divBody = document.querySelector("body div");
    
    divBody.appendChild(tabela);
    return tabela;
}

carregarBase(false)

