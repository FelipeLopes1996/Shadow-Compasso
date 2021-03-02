var Pessoa = {
  nome: "Felipe",
  idade: 25,
  altura: 1.7,
  cidade: "Recife",
  Pais: "Pernambuco",
};
// console.log(Pessoa)

const verificaNome = () => {
  let mudaAdcNome = !Pessoa.nome
    ? (Pessoa.existeONome = true)
    : (Pessoa.NaoexisteONome = false);
  return mudaAdcNome;
};

const verificaIdade = () => {
  let Midade =
    Pessoa.idade >= 18
      ? (Pessoa.eDeMaiorIdade = true)
      : (Pessoa.NaoEDeMaiorIdade = false);
  return Midade;
};

const verificaCidade = () => {
  let cidade =
    Pessoa.cidade === "Olinda"
      ? (Pessoa.NaoMoraEmRecife = true)
      : (Pessoa.moraRecife = false);
  return cidade;
};

const verificaPais = () => {
  let Pais =
    Pessoa.Pais !== "Olinda"
      ? (Pessoa.PaisQueMora = true)
      : (Pessoa.PaisQueMora = false);
  return Pais;
};

const verificaAltura = () => {
  const altura =
    Pessoa.altura < 1.6 
    ? (Pessoa.Naolta = true) 
    : (Pessoa.EAlta = false);
  return altura;
};

console.log(Pessoa);

verificaNome();
verificaIdade();
verificaCidade();
verificaPais();
verificaAltura();

console.log(Pessoa);
