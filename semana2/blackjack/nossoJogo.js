/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// 1) Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".

console.log ("Boas vindas ao jogo de Blackjack!")

const carta = comprarCarta()

// 2) Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
// 3)  Se o usuário responder cancel, imprime uma mensagem no console "O jogo acabou".
// 4) Se o usuário responder Ok, o programa deve iniciar uma nova rodada. 
//5) Cada carta sorteada é um objeto com duas propriedades: um texto que representa o que é escrito na carta; e um valor que mostra a pontuação da carta. 
// 6) O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo

inciarJogo = confirm ("Quer iniciar uma nova rodada?")

if (inciarJogo === true){
   const jogador = () => {
   const primeiraCartaJogador = comprarCarta() 
   const segundaCartaJogador = comprarCarta()
   let somaCarta = (carta.valor + carta.valor)
   console.log("Usuário - cartas:",carta.texto, "-" ,carta.valor, "- pontuação", somaCarta)
   
}
   jogador ()

   const computador = () => {
   const primeiraCartaComputador = comprarCarta()
   const segundaCartaComputador = comprarCarta()
   let somaCarta2 = (carta.valor + carta.valor)
   console.log("Computador - cartas:",carta.texto, "-" ,carta.valor, "- pontuação", somaCarta2)
  
   }
   computador ()
} else {
   console.log ("O jogo acabou")
}

const resultado = () => {

//  7) O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo

if (somaCarta === somaCarta2){
   console.log ("Empate!")
}else if (somaCarta > somaCarta2) {
   console.log ("O usuário ganhou!")
}else (somaCarta < somaCarta2)
   console.log ("O computador ganhou!")

} 

resultado ()






