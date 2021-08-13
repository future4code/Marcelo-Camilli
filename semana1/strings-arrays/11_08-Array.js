// Exercícios de interpretação //

//  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa. //

let array
console.log('a. ', array)

// apenas "a.",uma vez que não atribuímos um valor a variável array.//

array = null
console.log('b. ', array)

// "b." null. //

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

// Imprime "c.", 11. O lenght nos diz quantos itens tem em nossa lista. //

let i = 0
console.log('d. ', array[i])

// Imprime "3", é o número que corresponde ao item inicial da nossa lista //

array[i+1] = 19
console.log('e. ', array)

// array 11 //

const valor = array[i+6]
console.log('f. ', valor)

// Imprime "9" 3 + 6 //

// 2) Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?//

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Todas as letras digitadas pelo usuário irão aparecer maiúsculas, todas as vogais "A" serão trocadas por "I" e no final a quantidade de elementos (letras) digitadas //

// Exercícios de escrita de código

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

    //O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

  
const nomeDoUsuario = prompt ("Digite seu nome:")

const emailDoUsuario = prompt ("Digite seu e-mail:")

console.log (emailDoUsuario, "foi cadastrado com sucesso. Seja bem0vinda(o),", nomeDoUsuario, "!")

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:


const comidasPreferidas = ["churraso", "pastel", "pizza", "macarrão", "hamburguer"]

//a) Imprima no console o array completo

console.log ("Minhas comidas preferidas:", comidasPreferidas)

// b)Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.

console.log (comidasPreferidas [0])
console.log (comidasPreferidas [1])
console.log (comidasPreferidas [2])
console.log (comidasPreferidas [3])
console.log (comidasPreferidas [4])

// c)Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

novaComidaPreferida = prompt ("Qual sua comida preferida?")

comidasPreferidas.push (novaComidaPreferida)
comidasPreferidas.replaceAll (comidasPreferidas[1], novaComidaPreferida)

console.log ("Nova lista de comidas preferidas:", comidasPreferidas)

// 3. Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas

listaDeTarefas = []

//b ) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

tarefaUm = prompt ("Digite a primeira tarefa preferida:")
tarefaDois = prompt ("Digite a segunda tarefa preferida:")
tarefaTres = prompt ("Digite a terceira tarefa preferida:")

listaDeTarefas = [tarefaUm, tarefaDois, tarefaTres]


//c) Imprima o array no console

console.log (listaDeTarefas)

//d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 



