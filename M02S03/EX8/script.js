localStorage.gravacao = "";

function seletor(classe){
    let documento = document.querySelector(`.${classe}`);
    return documento;
}

function adicionar(){
    let valor = seletor("input");
    alert(valor.value)
    valor.value = ""
}

function salvar(){
    let valor = seletor("input");
    console.log(valor.value)
    if(valor.value == ""){
        alert("Insirá uma mensagem no campo de input!")
        return null
    }
    localStorage.gravacao = valor.value;
    alert("Mensagem salva com sucesso!")
    valor.value = ""
}

function mostrar(){
    if(localStorage.gravacao == "" || localStorage.gravacao == undefined){
        alert("Não há ítens salvos!")
    }else{
        let valor = seletor("input");
        valor.value = localStorage.getItem("gravacao")
    }
}