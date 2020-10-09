// Algoritimo no VISUALG

/* 
Var
// Seção de Declarações das variáveis 
numero, fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite um número para calcular o fatorial:")
   leia(numero)
   fatorial := 1
   para contador de 1 ate numero faca
        fatorial:= fatorial * contador
   fimpara
   
   escreval("O fatorial de ", numero, " é: ", fatorial)

Fimalgoritmo
 */

 function calcular() {
     const numero = prompt('Digite um número para calcular o fatorial:')
     let fatorial = 1
     for (let contador = 1; contador <= numero; contador++) {
         fatorial = fatorial * contador
        }
        document.querySelector('#paragrafo').innerHTML = "O fatorial de "+ numero + " é: "+ fatorial
 }