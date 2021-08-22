// Exercícios de interpretação 

//1) 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

       let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
  
    //  O código adciona sempre um valor na frente do array, até chegar no quinto índice. Será impresso o número 10.

 //2)Leia o código abaixo:

 const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//a) O que vai ser impresso no console?
// Todos os números do array que forem maior que 18 : [19,21,23,25,27,30]

//b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

//3) Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

//Será impresso: *, **, ***, ****;

// Exercícios de escrita de código
// 1)Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

const quantosPets = Number (prompt(" Quantos bichinhos de estimação você tem ?"))
  if (quantosPets = 0){
        console.log ("Que pena! Você pode adotar um pet!")
  } 
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo:
// se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
//c) Por fim, imprima o array com os nomes dos bichinhos no console
  if (quantosPets > 0) {
    let arrayBichinhos
    for (let i=0; i < bichinhos; i++){
      arrayBichinhos.push(prompt ("Qual o nome do seu bichinho?"))
    }
     console.log(arrayBichinhos)
  }




//2) Considere que você tenha acesso a um array  (chamado de 'array original') 
// que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

 const arrayOiriginal = [2,11,28,35,48,95]


//a) Escreva um programa que **imprime** cada um dos valores do array original.

function imprimirArray (arrayOiriginal){
  for (let valor of arrayOiriginal){
    console.log (valor)
  }
}
imprimirArray (arrayOiriginal)

//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

function imprimirArrayDivididos (arrayOiriginal){
  for (let valor of arrayOiriginal){
    console.log (valor / 10)
  }
}
imprimirArray (arrayOiriginal)
//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

function imprimirArrayPares (arrayOiriginal){
  for (let valor of arrayOiriginal){
    console.log (valor % 2 === 0)
  }
}
imprimirArray (arrayOiriginal)

//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.




//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

