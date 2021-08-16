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

  const alturaRetangulo = Number (prompt ("Digite o tamanho da base do retangulo, em centímetros:"))
  const larguraRetangulo = Number (prompt(" Digite o tamanho da altura do retangulo, em centímetros:"))
  
  const areaRetangulo = larguraRetangulo * alturaRetangulo 
  console.log(areaRetangulo)
  } 
calculaAreaRetangulo ()

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number (prompt ("Digite o ano atual:"))
  const anoNascimento = Number (prompt ("Digite seu ano de nascimento"))

  const suaIdade = anoAtual - anoNascimento
  console.log (suaIdade)
}
imprimeIdade() 

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const pesoAtual = Number (prompt( "Digite seu peso atual:"))
  const alturaAtual = Number (prompt("Digite sua altura atual:")) ^2

  const imc = pesoAtual / alturaAtual
  console.log ("Seu IMC é", imc)
}

calculaIMC ()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const seuNome = prompt ("Digite seu nome")
  const suaIdade = prompt("Digite sua idade")
  const seuEmail = prompt ("Digite seu email")

  console.log("Meu nome é", seuNome, "tenho", suaIdade, "e o meu email é", seuEmail)
  
}
imprimeInformacoesUsuario ()





// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const coresFavoritas = [Azul, Amarelo, Vermelho]

  console.log = (coresFavoritas)
}

imprimeTresCoresFavoritas ()


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  const letrasMaiusculas = prompt ("Digite uma frase:")

  console.log (letrasMaiusculas.toUpperCase())
  }

  retornaStringEmMaiuscula ()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}