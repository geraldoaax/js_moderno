const express = require('express');
const routes = express.Router();

// const peso1 = 1.0
// const peso2 = Number('2.0')

// console.log(peso1, peso2)
// console.log(Number.isInteger(peso1))
// console.log(Number.isInteger(peso2))

// const avaliacao1 = 9.313
// const avaliacao2 = 3.412

// const total = avaliacao1 * peso1 + avaliacao2 * peso2
// const media = total / (peso1 + peso2)
// console.log(media.toFixed(2))
// console.log(media.toString(2)) //binario
// console.log(typeof media)
// console.log(typeof Number)

// console.log(7 / 0) //gera infinito
// console.log("10" / 2) // converte em numero
// console.log("Show" / 2) // not a number
// console.log((0.1 + 0.7).toFixed(2)) //gera imprecisão -> Usar toFixed
//---------------------------------------
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area.toFixed(2))
console.log(typeof Math)

// Users
routes.get('/')

module.exports = routes
