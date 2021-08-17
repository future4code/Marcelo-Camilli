// Exercícios de interpretação de código
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

// Será impresso no console:
// Matheus Nachtergaele
// Virginia Cavendish
// cana: "Globo", horário: "14h"

//2)

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


// a) O que vai ser impresso no console?
// Irá imprimir a palavra "false" 
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// Exercícios de escrita de código
//1 ) a)Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos).
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }

 function nomePessoa () {
     return
 }
nomePessoa (pessoa)

console.log ("Eu sou " pessoa.nome, "mas pode me chamar de: ", pessoa.apelidos [0], pessoa.apelidos [1] "ou" pessoa.apelidos [2])

