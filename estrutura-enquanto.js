// Algoritimo no VISUALG
 
/* 
Var
// Seção de Declarações das variáveis 
    idade, limite, contador: inteiro
    nome: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite a quantidade de vezes que vai ser verificado idade: ")
   leia(limite)
   contador := 0
   enquanto contador < limite faca
       escreva("Digite o nome da pessoa: ")
       leia(nome)
       escreva("Digite a idade de ",nome, ": ")
       leia(idade)
       se idade > 18 entao
           escreval(nome," você é maior de idade!")
       senao
           escreval(nome," você é menor de idade!")
       fimse
       contador := contador +1
       fimenquanto
           

Fimalgoritmo */

function calcular(){
    const limite = prompt('Digite a quantidade de vezes que vai ser verificado idade:')
    let contador = 0
    while(contador < limite) {
        const nome = prompt('"Digite o nome da pessoa: "')
        const idade = prompt(`Digite a idade de ${nome}:`) 
        if(idade > 18)
           document.getElementById('paragrafo').innerText = `${nome} você é maior de idade!`
        else
           document.getElementById('paragrafo2').innerText = `${nome} você é menor de idade!`
        contador++   
    }
}

