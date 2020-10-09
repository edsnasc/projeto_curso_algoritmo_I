// Algoritimo no VISUALG

/* Var
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

   escolha operacao
   caso "+"
      resultado := valor01 + valor02
   caso "-"
      resultado := valor01 - valor02
   caso "*"
      resultado := valor01 * valor02
   caso "/"
      resultado := valor01 / valor02
   fimescolha
     escreval("resultado é igual: ", resultado)

Fimalgoritmo */

function calcular() {
    const valor01 = prompt('Digite o primeiro valor: ')
    const operacao = prompt('"Digite a operação EX: +, -, *, /"')
    const valor02 = prompt('Digite o segundo valor:')

    switch (operacao) {
        case "+":
            resultado = parseInt(valor01) + parseInt(valor02)
            break;
        case "-":
            resultado = parseInt(valor01) - parseInt(valor02)
            break;
        case "*":
            resultado = parseInt(valor01) * parseInt(valor02)
            break;
        case "/":
            resultado = parseInt(valor01) / parseInt(valor02)
            break;
        }

        document.querySelector('#paragrafo').innerHTML = resultado 
    }