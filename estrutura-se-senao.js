// Algoritimo no VISUALG

/* 
Var
// Seção de Declarações das variáveis 
    valor01, valor02, resultado: real
    operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("A proposta de programa é calcular dois valores baseado na operação de sua escolha")

   escreval("Digite o primeiro valor: ")
   leia(valor01)
   escreval("Digite a operação EX: +, -, *, /")
   leia(operacao)
   escreval("Digite o segundo valor: ")
   leia(valor02)
   
   se operacao = "+" entao
      resultado := valor01 + valor02
        senao
          se operacao = "-" entao
             resultado := valor01 - valor02
             senao
               se operacao = "*" entao
                  resultado := valor01 * valor02
                  senao
                    se operacao = "/" entao
                       resultado := valor01 / valor02
                    fimse
                fimse
           fimse
     fimse
     
     escreval("resultado é igual: ", resultado)

Fimalgoritmo
 */

function calcular(){
    const valor01 = prompt('Digite o primeiro valor: ' )
    const operacao = prompt('"Digite a operação EX: +, -, *, /"')
    const valor02 = prompt('Digite o segundo valor:') 
    
    if( operacao == "+" ){
        resultado = parseInt( valor01 ) + parseInt( valor02 )
    }else if( operacao == "-" ){
        resultado = parseInt( valor01 ) - parseInt( valor02 )
    }else if( operacao == '*' ){
        resultado = parseInt( valor01 ) * parseInt( valor02 )
    }else if( operacao == "/" ){
        resultado = parseInt( valor01 ) / parseInt( valor02 )
    }
    
    document.querySelector('#paragrafo').innerHTML = resultado
}