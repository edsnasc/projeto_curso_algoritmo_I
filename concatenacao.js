// Algoritimo no VISUALG

/* 
Var
// Seção de Declarações das variáveis 
  nome: caractere
  numero: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  escreval("Digite o nome:")
  leia(nome)
  escreval("Digite o numero:")
  leia(numero)
  
  escreval(nome, " : ", numero)
 */

 const nome = prompt("Digite o nome: ")
 const numero = prompt("Digite o numero: ")

 document.querySelector('#paragrafo').innerHTML = nome + " : " + numero

