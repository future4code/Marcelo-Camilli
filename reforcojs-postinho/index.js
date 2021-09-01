
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
}

// c-)Faça uma função chamada "verificaSeEMaior"

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

    //  Sua lógica aqui
    const nomeDoUsuario = prompt ("Digite seu nome:")
    const anoDeNascimento = Number (prompt("Digite seu ano de nascimento:"))
    const senhaDousuario = prompt ("Digite sua senha:")
    const nacionalidae = prompt ("Digite sua nacionalidade")

    const usuario = [nomeDoUsuario,anoDeNascimento, senhaDousuario, nacionalidae]

    if (anoDeNascimento <= 2003 && senhaDousuario.length >=6 && nacionalidae === "brasileira"){
        return "Pode se cadastrar!"
    } else "Não pode se cadastrar!"
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
    const senha = prompt ("digite sua senha:")
    const senhaValida = "labenu"

    if (senha === senhaValida){
        return "Usuário Logado"
    } else {
        return "Senha inválida"
    }
}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------


const primeiraDose = () => {

    //  Sua lógica aqui
    const nomeUsuario = prompt("Digite seu nome")
    const nomeVacina = prompt ("Digite o nome da vacina que tomou")

    
    if (nomeVacina === "Coronavac") {
        tempo = 28 
        data = "28/09/2021"
    } else if (nomeVacina === "Astazenica") {
        tempo = 90
        data = "01/12/2021"
    } else if (nomeVacina === "Pfizer") {
        tempo = 90 
        data = "01/12/2021"
    }

    return `Olá ${nomeUsuario}! A próxima dose da ${nomeVacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`

}
console.log(primeiraDose())

// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
        const mudarPessoa = usuarios.filter ( (usuario) => {
        if (usuario.nome === nomeDoUsuario)
            usuario.imunizacao = "completa"
        return usuario

        })

}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const listDeUsuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    
    const pessoaImunizada = usuarios.filter ((usuario)=>{
            if(usuario.imunizacao === "incompleta"){
                console.log (`Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
            }

    })
    
    
}

console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());