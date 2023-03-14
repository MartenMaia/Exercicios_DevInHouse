const playlist = [
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
                    cantor:"Scorpions"
                },
                {
                    nome: "Pure/Honey",
                    cantor:"Beyoncé"
                },
            ];


let tabela = document.createElement('TABLE');
tabela.insertRow(0).innerHTML = "<th>Nome</th><th>Cantor</th>"

for (let index = 0; index < playlist.length; index++) {
    tabela.insertRow(index+1).innerHTML = `<td>${playlist[index].nome}</td><td>${playlist[index].cantor}</td>`    
}

let divBody = document.querySelector("body");
divBody.appendChild(tabela);