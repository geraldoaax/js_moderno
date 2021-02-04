console.log(typeof Object)

class Produto { }
console.log(typeof Produto)

function support() {

}

function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 4, 5, 1)
imprimirSoma()

function soma(a, b = 1) {
  return a + b
}
console.log(soma(2))
console.log(soma(2, 54))
console.log(soma())

