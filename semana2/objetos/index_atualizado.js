
// Exercícios de interpretação
// 1)
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//O que vai ser impresso no console?




//2)
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) O que vai ser impresso no console?

// Juca
// Juba
//Jubo

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// 3 pontos antes do nome de um objeto ou array, é utilizada no spread operator, que faz uma cópia do objeto.



//3) 
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?

//false 
// A propriedade "altura" não existe, então o console não ira imprimir nada.



//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// Pois a propriedade "altura" não existe, dessa forma, não tem o que retornar impresso.



// Exercícios de escrita de códigos

//1) a)Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos
//(um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const pessoaApelido = {
	nome: "Amanda",
	apelidos: ["Amandinha", "Mandinha", "Mandi"]
}



function imprimePessoa (objeto) {
	console.log ("Eu sou", pessoaApelido.nome, "mas pode me chamar de", pessoaApelido.apelidos)
}

function imprimePessoa ()


//b)  Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
//mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const novaPessoaApelido = {...pessoaApelido, apelidos:["Amandinha", "Mandinha", "Mandi"]
}

console.log (novaPessoaApelido)


// 2)a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const dados = {
	nome: "Marcelo",
	idade: 29,
	profissão: "professor"

}


const identidadeNova = {
	nome: "Marcel",
	idade: 29,
	profissão: "programador"

}


// b)Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//1. O valor de `nome`
//2. O numero de caracteres do valor `nome`
//3. O valor de `idade`
//4. O valor de `profissão`
//5. O numero de caracteres do valor `profissão`

function informaIdentidade (identidade) {
	return [
		identidade.nome, 
		identidade.nome.length, 
		identidade.idade, 
		identidade.profissão, 
		identidade.profissão.length
	]
}

console.log (informaIdentidade(dados))

// 3) a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = []

//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

frutaUm = {
	nome: "laranja",
	disponibilidade: true
	
}

frutaDois = {
	nome: "Maçã",
	disponibilidade: false
	
}

frutaUm = {
	nome: "banana",
	disponibilidade: true
	
}

//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

function 