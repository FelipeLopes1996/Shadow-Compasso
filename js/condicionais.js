var Pessoa = {
  nome: "Felipe",
  idade: 25,
  altura: 1.7,
  cidade: "Recife",
  Pais: "Pernambuco",
};
// console.log(Pessoa)

// verificando se Pessoa.nome existe.
const verificaNome = () => {
  if(Pessoa.nome) {
    Pessoa.ExisteNome = 'sim'
  } else {
    Pessoa.ExisteNome = 'Não'
  }
};

const verificaIdade = () => {
  if(Pessoa.idade >= 18) {
    Pessoa.DeMaior = 'sim'
  } else {
    Pessoa.DeMaior = 'Não'
  }
};

const verificaCidade = () => {
  if(Pessoa.cidade === "Recife") {
    Pessoa.MoraEmRecife = 'sim'
  } else {
    Pessoa.MoraEmRecife = 'Não'
  }
};

// negativa
const verificaPais = () => {
  if(Pessoa.Pais  !== "Pernambuco") {
    Pessoa.MoraPe = 'sim'
  } else {
    Pessoa.MoraPe = 'Não'
  }
};

const verificaAltura = () => {
  if(Pessoa.altura < 1.60) {
    Pessoa.Alta = 'não'
  } else {
    Pessoa.Alta = 'Sim'
  }
};

console.log(Pessoa);

verificaNome();
verificaIdade();
verificaCidade();
verificaPais();
verificaAltura();

console.log(Pessoa);
