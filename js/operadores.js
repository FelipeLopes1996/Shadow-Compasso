// manipulando variáveis do tip String

console.log("----------------MANIPULANDO STRING------------------");

var nome = "Felipe";
var sobrenome = "Lopes";

// juntando ou somando strings
var juntandoString = nome + sobrenome;

console.log(juntandoString);

//concatenando
var concatenando = "meu nome é " + nome + " de " + sobrenome;
console.log(concatenando);

// concatenando com template String
var concatenandoComTemplate = `meu nome é ${nome} ${sobrenome}`;

console.log(concatenandoComTemplate);

// descobrindo tamanho da variável nome
var tamanhoDaString = nome.length;
console.log(tamanhoDaString);

// descobrindo valor do caractere da string
var buscandoCaractere = nome[2];
console.log(buscandoCaractere);

// conferindo valor dentro da String se existir voltar o índice caso não retorna -1
var conferiValor = nome.indexOf("Fe");
console.log(conferiValor);

//usamos para pegar determinando comprimento do indice 0 a 4 e busca
// até aonde vc colocou o segundo valor
var corte = nome.slice(0, 4);
console.log(corte);

//corta os valores indicado do valor 1 ao valor x dentro do cumprimento da string
var corte2 = nome.slice(3);
console.log(corte2);

// operadores numéricos

console.log("----------------OPERADORES NUMÉRICOS------------------");

console.log("");

var numero1 = 3;
var numero2 = 2;

var soma = numero1 + numero2;
console.log(`o valor de ${numero1} somado por ${numero2} é igual a ${soma}`);

var subtracao = numero1 - numero2;
console.log(
  `o valor de ${numero1} subtraido por ${numero2} é igual a ${subtracao}`
);

var multiplicacao = numero1 * numero2;
console.log(
  `o valor de ${numero1} multiplicado por ${numero2} é igual a ${multiplicacao}`
);

var divisao = numero1 / numero2;
console.log(
  `o valor de ${numero1} dividido por ${numero2} é igual a ${divisao}`
);
