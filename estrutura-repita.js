// Algoritimo no VISUALG

/* 
Var
// Seção de Declarações das variáveis 
    sairLoop: caractere
    valor01, valor02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    repita
    escreva("Digite o primeiro valor: ")
    leia(valor01)
    escreva("Digite o segundo valor: ")
    leia(valor02)
    escreval("Resultado é: ", valor01 + valor02)
    escreva("Deseja sair do programa S/N: ")
    leia(sairLoop)
    ate sairLoop <> "N"

Fimalgoritmo */

function calcular(){
    do{
        const valor01 = prompt("Digite o primeiro valor:")
        const valor02 = prompt("Digite o segundo valor:")
        const resultado = parseInt(valor01) + parseInt(valor02)
        document.querySelector("#paragrafo").innerHTML = `Resultado é: ${resultado}`
        const sairLoop = prompt("Deseja sair S/N:")
    }while(sairLoop != "N")
}