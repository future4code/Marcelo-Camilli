// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   const array2Invertido = array.reverse()
   return array2Invertido
 }

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   const arrayOrdenado = array.sort(function (a,b){
      if (a> b) return 1
      if (a <b) return -1
      return 0
  })
 return arrayOrdenado
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let par = []
    for (let i =0; i <array.length; i++) {
        if (array[i] % 2 === 0){
            par.push(array[i])
        }
    } 
    return par
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let parElevadoADois = []
   for (let i =0; i <array.length; i++) {
       if (array[i] % 2 === 0){
           parElevadoADois.push(array[i]** 2)
       }
   } 
   return parElevadoADois
 }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
   const arrayEmOrdemDecrescente = retornaArrayInvertido(retornaArrayOrdenado(array))

   return arrayEmOrdemDecrescente[0]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   const [menor, maior] = retornaArrayOrdenado([num1, num2])  
   return  { 
   maiorNumero: maior,
   maiorDivisivelPorMenor: maior % menor === 0,
   diferenca: maior - menor
}
 
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const resultado = []
     
   for (let i = 0; i < n; i++) {
      resultado[i] = 2 * i
   }

   return resultado
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

   if (ladoA === ladoB && ladoB === ladoC){
      return "Equilátero"
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
      return "Escaleno"
  } else {
      return "Isósceles"
  }
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  function retornaSegundoMaiorESegundoMenor(array) {

   const arrayOrdenado = retornaArrayOrdenado(array)
   const indiceSegundoMenor = 1
   const indiceSegundoMaior = array.length - 2

   return [
      arrayOrdenado[indiceSegundoMaior],
      arrayOrdenado[indiceSegundoMenor]
   ]
}
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

   const filme1 = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
}
const nomeDoFilme = filme1.nome
const anoDoFilme = filme1.ano
const diretorDoFilme = filme1.diretor
const atoresDoFilme = filme1.atores
  
  return (`Venha assistir ao filme ${nomeDoFilme}, de ${anoDoFilme}, dirigido por ${diretorDoFilme} e estrelado por ${atoresDoFilme}.`)
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
      const novaPessoa = { 
        ...pessoa,
        nome: "ANÔNIMO"
    }
   return novaPessoa
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const pessoaAutorizada = pessoa => (
      pessoa.idade > 14 &&
      pessoa.idade < 60 &&
      pessoa.altura > 1.5
  )
  
  function retornaPessoasAutorizadas(pessoas) {
         return pessoas.filter (pessoaAutorizada)
    
  }
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}