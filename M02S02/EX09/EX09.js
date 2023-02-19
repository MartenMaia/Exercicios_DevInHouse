let menu = [
    "(1)Hortifruti\n",
    "(2)Laticínios\n",
    "(3)Carnes\n",
    "(4)Peixes\n",
    "(5)Aves\n",
    "(6)Fechar pedido",
];

let novaTag = document.createElement('h6');
let tagLista = document.querySelector(".lista");
tagLista.appendChild(novaTag);

let pedido = [0,0,0,0,0];

let texto = "";

while(true){
    let listaMenu = menu.reduce((total, element) => total + (element));
    let opcao = prompt(`Bom dia e bem vindo a Supermercado Gatolinho \nQual produto voce gostaria de adicionar ao carrinho? \n${listaMenu}`);
    let opcaoInt = parseInt(opcao);
    let texto = "";
    let qtd;
    if(opcaoInt < 6 && opcaoInt > 0){
        switch(opcaoInt){
            case 1:
                qtd = prompt(`Digitei a quantidades de Hortifrutis que desejas:`);
                pedido[0] += parseInt(qtd);
                texto = " > Hortifruti: "+qtd+" Unidades \n";
                novaTag.innerText += texto;
                continue;
            case 2:
                qtd = prompt(`Digitei a quantidades de Laticínios que desejas:`);
                pedido[1] += parseInt(qtd);
                texto = texto + " > Laticínios: "+qtd+" Unidades \n ";
                novaTag.innerText += texto;
                continue;
            case 3:
                qtd = prompt(`Digitei a quantidades de Carnes que desejas:`);
                pedido[2] += parseInt(qtd);
                texto = texto + " > Carnes: "+qtd+" Unidades \n ";
                novaTag.innerText += texto;
                continue;
            case 4:
                qtd = prompt(`Digitei a quantidades de Peixes que desejas:`);
                pedido[3] += parseInt(qtd);
                texto = texto + " > Peixes: "+qtd+" Unidades \n ";
                novaTag.innerText += texto;
                continue;
            case 5:
                qtd = prompt(`Digitei a quantidades de Aves que desejas:`);
                pedido[4] += parseInt(qtd);
                texto = texto + " > Aves: "+qtd+" Unidades \n ";
                novaTag.innerText += texto;
                continue;
        }
    }else if(opcaoInt == 6 || opcao == null){
        alert("Pedido realizado com sucesso!!!");
        break
    }else{
        alert("Seleção Invalida!!! \nSelecione uma opcao entre 1 a 6");
        continue
    }
}

const resposta = function(tipo, qtda){
    let nomeTipo;
    switch(tipo){
        case undefined:
            return "\nCarrinho vazio!"
        case 0:
            nomeTipo = "Hortifruti";
            break;
        case 1:
            nomeTipo = "Laticínios";
            break;
        case 2:
            nomeTipo = "Carnes";
            break;
        case 3:
            nomeTipo = "Peixes";
            break;
        case 4:
            nomeTipo = "Aves";
            break;
    }
    return `\nO produto com a maior quantidade de pedidos foi: ${nomeTipo} com ${qtda} unidades`
}

let qtdaResposta = 0;
let tipoResp;
let tipo = 0;
for (const item of pedido) {
    if(parseInt(item) > qtdaResposta){
        qtdaResposta = parseInt(item);
        tipoResp = tipo;
    }
    tipo++
}

novaTag.innerText += resposta(tipoResp,qtdaResposta);
tagLista.appendChild(novaTag);