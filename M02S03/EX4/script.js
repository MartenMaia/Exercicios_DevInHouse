let tempo= 1000;

let ciclo = setInterval(() =>{
    let divTempo = document.getElementById('num');
    let valor = parseInt(divTempo.innerText);
    if(valor == 0){
        return clearInterval(ciclo)
    } else {
        return divTempo.innerText = valor - 1;
    }
},tempo)

