// Exercícios interpretação

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}


//1) a)Explique o que o código faz. Qual o teste que ele realiza? 
//O código verifica se o número digitdo é divisível por (par) ou não. Caso ele for divisível, imprime, passou no teste, se não, não passou no teste.

//b)Para que tipos de números ele imprime no console "Passou no teste"? 
// Somente para os números pares (divisíveis por 2)

//c)Para que tipos de números a mensagem é "Não passou no teste"? 
// Para os números ímpares, que não são divisíveis por 2.

//2)O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
// O código recebe do usuário o nome de uma fruta é imprime o preço dela.

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// O preço da fruta maçã é R$ 2.25.

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default
// (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// O código ainda imprimiria somente até o preço da pêra, pois o default está sendo usado também.


//3)
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a) O que a primeira linha está fazendo?
// A primeira linha pede para o usuário inserir um número.

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se o usuário digitar 10, imprime "Esse número passou no teste". Se o usuário difitar -10, não imprime nada.

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Há um erro no console pois não foi atribuído nenhum valor a constante "mensagem" 

// Exercícios de escrita de código
//F1)aça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

const idadeUsuário = Number (prompt ("Digite sua idade:"))

if (idadeUsuário > 18) {
    console.log ("Você pode dirigir")
} else {
    console.log ("Você não pode dirigir")
}

//2) Agora faça um programa que verifica que turno do dia um aluno estuda. 
//Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", 
//"Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turnoDeEstudo = prompt ("Digite seu turno de estudo: (M) para Matutino. (V) para Vespertino e (N) para noturno")

if (turnoDeEstudo === "M"){
    console.log ("Bom dia!")
} else if (turnoDeEstudo === "V") {
    console.log ("Boa Tarde!")
} else if (turnoDeEstudo === "N") {
    console.log ("Boa Noite!")
} else { 
    console.log ("Digite novamente seu turno de estudo:")
}

//3) Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

switch (turnoDeEstudo) {
    case "M":
    console.log ("Bom Dia!")
    break
    case "V":
    console.log ("Boa Tarde!")
    case "N":
    console.log("Boa Noite!")
    default:
    console.log ("Digite novamente seu turno de estudo:")
}

// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais.
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
//então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

const tipoDeFilme = prompt("Qual o tipo de filme ?")
const precoDoIngresso = Number (prompt ("Qual o preço do ingresso?"))

if (tipoDeFilme === "fantasia" && precoDoIngresso < 15) {
    console.log ("Bom filme!")
} else {
    console.log ("Escolha outro filme")
}