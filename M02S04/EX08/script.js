const alunos = [
    {
        nome: 'Luis Carlos Elias',
        mediaFinal: 7.0,
    },
    {
        nome: 'Juliana Silva',
        mediaFinal: 8.5,
    },
    {
        nome: 'Pedro Pascal',
        mediaFinal: 5.5,
    },
    {
        nome: 'Ana Santos',
        mediaFinal: 6.5,
    }
];

let notas = alunos.map((item) => {return item.mediaFinal})

let media = notas.reduce((total, valor) => total + valor)

media = media/notas.length

console.log(media)