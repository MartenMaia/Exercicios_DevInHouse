let entrevistados = ["Marquinho", "Jonas", "Ana Clara", "Camila"];
let nota = [];
let qtdaRuim = 0;

while(nota.length < 4){
    let tamanho = nota.length;
    let avaliacao = prompt("Olá "+entrevistados[tamanho]+", \n Classifique a serie Stranger Things \n Entre as seguinte notas: Ruim, Bom e Excelente");
    nota.push(avaliacao);
    if(avaliacao.toLowerCase() == "ruim"){
        qtdaRuim++
    }
}
console.log(nota)
alert(`No total, ${qtdaRuim} entrevistados avaliaram a serie como Ruim"`)