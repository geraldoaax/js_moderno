let valor //nao iniciada
console.log(valor)

valor = null //ausencia de valor, mas foi definida
//nao aponta para nenhum objeto na memoria
console.log(valor)

const produto = {

}
console.log(produto.preco)
console.log(produto)

produto.preco = 33
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

delete produto.preco
console.log(produto)

produto.preco =null
console.log(!!produto.preco)

console.log(produto)




