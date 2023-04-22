
const carros = [
    {
        nome: "escort xr3",
        valor: 10000,
        marca: "Ford",
    },
    {
        nome: "Chevette",
        valor: 8000,
        marca: "Chevrolet",
    },
{
        nome:"Landau",
        valor: 14000,
        marca: "Ford",
    },
    {
        nome:"maverick",
        valor: 18000,
        marca: "Ford",
    },
];

const ford = carros.filter(carro => carro.marca === "Ford")
    .map( carro => ({nome: carro.nome, valor: carro.valor}));
// teste: console.log(ford)
