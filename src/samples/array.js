const valores = ['10', '23', 33]
console.log(valores)
console.log(valores[0], valores[3])

valores[3] = 333
console.log(valores)
console.log(valores.length)

valores.push({ id: 3}, false, null, 'testew')
console.log(valores)

console.log(valores.pop())
delete valores[4]
console.log(valores)
console.log(typeof valores)
