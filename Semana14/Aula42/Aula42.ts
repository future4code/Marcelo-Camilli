// Ex 1 
// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?
// Ocorre um erro,pois atribuímos um Type de string

const minhaString: string = "Labenu"

/*  b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
Como podemos fazer para que essa variáve também aceite strings? */
// podemos fazer a tipagem do tipo "unionTipe!" utilizando um pipe operator

const meuNumero: number | string = 1

/* c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
`nome`, que é uma string;
`idade`, que é um número;
`corFavorita`, que é uma string. */

const novoObjeto: {nome:string, idade: number, corFavorita: string} = {
    nome: "Marcelo",
    idade: 30,
    corFavorita: "azul"
}
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

enum CoresArcoIris {
    AZUL = "azul",
    VERDE = "verde",
    BRANCO = "branco"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}
const pessoa1: Pessoa = {
    nome: "Marcelo",
    idade: 30,
    corFavorita: CoresArcoIris.AZUL
}

const pessoa2: Pessoa = {
    nome: "Joao",
    idade: 2,
    corFavorita: CoresArcoIris.VERDE
}

const pessoa3: Pessoa = {
    nome: "Maria",
    idade: 3,
    corFavorita: CoresArcoIris.BRANCO
}

//D) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. 
// Utilize um `enum` para isso.

