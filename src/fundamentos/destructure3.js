function rand({ min = 0, max =  1000 }) {
const valor = Math.random() * (max - min) + min
return Math.floor(valor)
}
const obj = {max: 85, min: 123}
console.log(rand(obj))

console.log(rand({min: 445}))
console.log(rand({}))
