var x = 7 //declaração de variável
let y = 65 //{} variável só existente dentro dos demilimitadores
//multiplicação *
// divisão /
// adição +
// subtração -
// resto da divisão %
// operadores logicos &&(e)  ||(ou)
console.log(x)// imprimir

//condicional
if(x<10 && y==65){
    console.log('oi pessoal')
} else {
    console.log('não é pessoal')
}

// estrutura de repetição
for(var i =0; i<=10; i++){
    console.log(i)
}

// Array (vetor)
var lista = []
lista.push('teste')//adicionar valores
lista.push(78,89,65) // adiconar valores
console.log("Vetor "+ lista)
lista.pop() //excluir o ultimo elemento do vetor
lista.shift() //excluir o primeiro ele,emto do vetor
console.log('vetor'+ lista)
//.length tamanho do vetor
//posição especifica lista[3]
//Array vazio 

var lista = [1,3,4,2,4,5,6,7,8,9,21,32,41,432,890]
var elemento = 7
console.log('A posiçõa é: ' + lista.indexOf(elemento))