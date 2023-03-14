class Aluno{
    constructor(nome, cpf,codTurma){
        this.nome = nome;
        this.cpf = cpf;
        this.codTurma = codTurma;
    }

    getNome(){
        return this.nome
    };

    getCpf(){
        return this.cpf
    }

    getCodTurma(){
        return this.codTurma
    }

    imprimeDados(){
        let imprisao = {
            "nome": this.nome,
            "cpf": this.cpf,
            "codTurma": this.codTurma
        }
        console.log(imprisao)
        return
    }
}

// let carlos = new Aluno("Carlos","551451",2757) //Exemplo criado para teste