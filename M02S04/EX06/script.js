const alunos = [
    {
      "nome": "Luis Carlos Elias",
      "mediaFinal": 7.0,
    },
    {
      "nome":"Juliana Silva",
      "mediaFinal": 8.5,
    },
    {
      "nome": "Pedro Pascal",
      "mediaFinal": 5.5,
    },
    {
      "nome": "Ana Santos",
      "mediaFinal": 6.5,
    }
  ];

  var filter = alunos.filter((elemento) => {return elemento.mediaFinal >= 7.0})
  console.log(filter)