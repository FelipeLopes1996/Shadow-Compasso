var Pessoa = [
  {
    nome: "Felipe",
    idade: 25,
    altura: 1.7,
    cidade: "Recife",
    pais: "Pernambuco",
  },
  {
    nome: "Maria",
    idade: 20,
    altura: 1.5,
    cidade: "São Bernardo",
    pais: "São Paulo",
  },
  {
    nome: "joão",
    idade: 17,
    altura: 1.6,
    cidade: "Jaboatão",
    pais: "Pernambuco",
  },
];

// for

const manipulandoIdade = () => {
  for (let i = 0; i < Pessoa.length; i++) {
    const idades = Pessoa[i];
    idades.idade <= 18 ? (idades.DeMenor = "Sim") : (idades.DeMenor = "Não");
  }
};

// while

const VerificandoAltura = () => {
  let i = 0;
  while (i < Pessoa.length) {
    const altura = Pessoa[i];
    altura.altura >= 1.6 ? (altura.Alto = "Sim") : (altura.Alto = "Não");
    i++;
  }
};

// do while

const VerificandoPais = () => {
  let i = 0;
  do {
    const pais = Pessoa[i];
    pais.pais === "Pernambuco"
      ? (pais.MoraEmPe = "Sim")
      : (pais.MoraEmPe = "Não");
    i++;
  } while (i < Pessoa.length);
};

// for in

// Obs: só da para fazer interações com 1 objeto, mas não com array de objeto
// ou interação com 1 array

// for of

const VerificandoNome = () => {
  for (const nome of Pessoa) {
    const valor = nome.nome;
    !valor ? (nome.NomeExist = "sim") : (nome.NomeExist = "não");
  }
};

// antes da manipulação

console.log(Pessoa);

manipulandoIdade();  
VerificandoAltura(); 
VerificandoPais(); 
VerificandoNome(); 

// após manipulação

console.log(Pessoa);
