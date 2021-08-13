// Exercício interpretação //

// 1) Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.//

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

// imprime: "a.", false" //

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

// imprime: "b.", false" //

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

// imprime: "a.", true" //

console.log("d. ", typeof resultado)

// imprime: "a.", boolean" //

// 2) Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? //

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// Não é possível somar duas strings, ela deveria colocar um valor numérico: let primeiroNUmero = Number (prompt ("Digite um número!")) //

// 3) Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números. //

let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log (soma)

// Exercício de escrita de cógido //

// Exercício 1 //
const suaIdade = Number (prompt ("Qual sua idade?"))
const idadeAmigo = Number (prompt ("Qual a idade do seu melhor amigo?"))

const idadeMaior = suaIdade > idadeAmigo

console.log ("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)

const diferencaIdade = suaIdade - idadeAmigo

console.log ("Diferença de idade:", diferencaIdade)

// Exercício 2 //

const numeroPar = Number (prompt ("Difgite um número par:"))

const restoPorDois = numeroPar % 2 

console.log (restoPorDois)

// Independente do número escolhido a resposta é zero, uma vez que todos os números pares são divisíveis completamente por 2. //


// Exercício 3 // 

// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

// a) A idade do usuário em meses // 

const idadeDoUsuario = Number (prompt ("Digite sua idade"))

const idadeEmMeses = idadeDoUsuario * 12 

console.log ("Sua idade em meses é:", idadeEmMeses)

// b)A idade do usuário em dias // 

const idadeEmDias = idadeDoUsuario * 365 

console.log ("Sua idade em dias é:", idadeEmDias)

// c) A idade do usuário em horas //

const idadeEmHoras = idadeEmDias * 24 

console.log ("Sua idade em horas é:", idadeEmHoras)

// Exercício 4 // 
//O primeiro numero é maior que segundo?//
//O primeiro numero é igual ao segundo?//
// O primeiro numero é divisível pelo segundo? //
// O segundo numero é divisível pelo primeiro? //

const numeroUm = Number (prompt ("Digite o primeiro número:"))

const numeroDois = Number (prompt ("Digite o segundo número:"))

const numeroMaior = numeroUm > numeroDois

console.log ("O primeiro número é maior que o segundo?", numeroMaior)

const numeroIgual = numeroUm === numeroDois

console.log ("O primeiro número é igual ao segundo?", numeroIgual)

const numeroDivisivel = numeroUm % numeroDois
