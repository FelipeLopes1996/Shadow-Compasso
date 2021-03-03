var Pessoa = [
  {
    nome: "Felipe",
    idade: 25,
    altura: 1.7,
    cidade: "Recife",
    pais: "Pernambuco",
  },
  {
    nome: "",
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

const VerificandoIdade = () => {
  for (let i = 0; i < Pessoa.length; i++) {
    const idades = Pessoa[i];
    if (idades.idade <= 18) {
      idades.DeMaior = "não";
    } else {
      idades.DeMaior = "Sim";
    }
  }
};

// while

const VerificandoAltura = () => {
  let i = 0;
  while (i < Pessoa.length) {
    const altura = Pessoa[i];

    if (altura.altura >= 1.6) {
      altura.Alto = "Sim";
    } else {
      altura.Alto = "Não";
    }
    i++;
  }
};

// do while

const VerificandoPais = () => {
  let i = 0;
  do {
    const pais = Pessoa[i];

    if (pais.pais === "Pernambuco") {
      pais.MoraEmPe = "Sim";
    } else {
      pais.MoraEmPe = "Não";
    }

    i++;
  } while (i < Pessoa.length);
};

// for in

// Obs: só da para fazer interações com 1 objeto, mas não com array de objeto
// ou interação com 1 array

// for of

const VerificandoNome = () => {
  for (const nome of Pessoa) {
    const nomeExiste = nome.nome;
    if (nomeExiste) {
      nome.NomeExist = "Sim";
    } else {
      nome.NomeExist = "Não";
    }
  }
};

const verificaCidade = () => {
  for (const Cidade of Pessoa) {
    const Cid = Cidade.cidade;
    if (Cid !== 'Recife') {
      Cidade.MoraEmRecife = "Não";
    } else {
      Cidade.MoraEmRecife = "Sim";
    }
  }
};

// antes da manipulação

console.log(Pessoa);

VerificandoIdade();
VerificandoAltura();
VerificandoPais();
VerificandoNome();
verificaCidade();

// após manipulação

console.log(Pessoa);
