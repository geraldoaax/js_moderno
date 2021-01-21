const escola = "cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf(3))

console.log(escola.substring(2))
console.log(escola.substring(0,3))
console.log('escola'.concat(escola).concat("!"))
console.log('escola' + escola + "!")
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) //ver curso de regex
console.log(escola.replace(/\w/g, 'e')) //ver curso de regex
console.log('Eu, coxinha, bike'.split(','))
console.log('Eu, coxinha, bike'.split(/,/)) //ver curso de regex
