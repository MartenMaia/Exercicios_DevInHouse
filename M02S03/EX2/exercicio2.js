let divResultado = document.querySelector(".resultado");

function somar(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let resultado = parseFloat(n1)+parseFloat(n2);

    divResultado.innerText = ("O Resultado da soma "+n1+" + "+n2+" é: "+resultado);

    return resultado;
}

function subtrair(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let resultado = parseFloat(n1)-parseFloat(n2);

    divResultado.innerText = ("O Resultado da soma "+n1+" - "+n2+" é: "+resultado);

    return resultado;
}