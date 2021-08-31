// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRetangulo = Number (prompt("Digite a altura do retângulo"))
  const larguraRetangulo = Number (prompt("Digite a largura do retângulo"))
  const areaRetangulo = alturaRetangulo * larguraRetangulo
  console.log (areaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number (prompt("Qual o ano atual?"))
  const anoNascimento = Number (prompt("Qual seu ano de nascimento?"))
  const idade = anoAtual - anoNascimento
  console.log (idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt ("Digite seu nome")
  const idade = Number (prompt("Digite sua idade"))
  const email = prompt ("Digite seu e-mail:")
  console.log ("Meu nome é "+ nome+ ", tenho "+ idade + " anos, e o meu email é " + email + ".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Insira sua primeira cor favorita")
  const cor2 = prompt("Insira sua primeira cor favorita")
  const cor3 = prompt("Insira sua primeira cor favorita")
  
  const coresFavoritas = [cor1, cor2, cor3]
  console.log (coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  
  return custo / valorIngresso
  } 



// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  var tamanhoString1 = string1.length
  var tamanhoString2 = string2.length
  let tamanhosIguais = tamanhoString1 === tamanhoString2

  return tamanhosIguais
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return (array[array.length -1])

}



// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const auxiliar = array[array.length -1]
  array[array.length -1] = array[0]
  array[0] = auxiliar
  return array
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
var checaIgualdade = string1.toUpperCase() === string2.toUpperCase ()
return checaIgualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number (prompt("QUal é o ano atual?"))
  const anoNascimento = Number (prompt("Qual o seu ano de nascimento?"))
  const anoEmissao = Number (prompt("Qual é o ano de emissão da sua identidade?"))

  const idade = anoAtual - anoNascimento
  const tempoDesdeEmissao = anoAtual - anoEmissao

  if (idade <= 20 && idade <= 50 && tempoDesdeEmissao >=10) {
    console.log(true)
  } else if (idade > 50 && tempoDesdeEmissao >= 15 ) {
    console.log(true)
  }
  else{
    console.log (false)
  }

  }


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
if (ano % 400 === 0){
  return true
} else if (ano % 4 === 0 && !(ano % 100 == 0)) {
  return true
} else {
  return false
}
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}