//armazenando uma funcao em variavel

const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

//utilizando arrow function

const soma = (a, b) => {
  return a + b
}
console.log(soma(3, 3))

//retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(33, 3))

const imprimir2 = a => console.log(a)
imprimir2('teste')