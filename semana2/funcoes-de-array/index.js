// Exercícios de interpretação

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })


  //1) a) O que vai ser impresso no console ?
  // O console irá imprimir todos os objetos, com nome e apelido.

  // 2)
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

  //a) O que vai ser impresso no console?
  // irá retornar somente o nome dos objetos, formando um novo array com essas informações.

  //3) 

  const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

// a) O que vai ser impresso no console?
// Será impresso no console somente os itens que tiverem apelidos diferentes de Chijo.


// Exercícios de escrita
//1) Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 //a) Crie um novo array que contenha apenas o nome dos doguinhos
 
 const somenteNomes = pets.map( (item,index,array) => {
     return item.nome
 })
 
 console.log (somenteNomes)

 //b) Crie um novo array apenas com os cachorros salsicha


 const somenteSalsichas = pets.map( (item,index,array) => {
    return item.raca !== "Salsicha"
    
 }) 
 
 console.log (somenteSalsichas)

 //c)Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
 // A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


 //2) Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a)Crie um novo array que contenha apenas o nome de cada item

 const nomeDoItem = produtos.map (( item,index,array) => {
    return item.nome
})
console.log (nomeDoItem)
// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles



