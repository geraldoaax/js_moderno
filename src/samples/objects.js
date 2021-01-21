const prod1 = {}
prod1.nome = "junao"
prod1.comida = "coxinha"
prod1['desconto  ponei'] = 0.40 //nao usar com despaço
console.log(prod1)

const prod2 = {
  nome: 'junao',
  tipo:'coxinha',
  desconto_ponei: {
    minimo: 0.3,
    maximo: {
      inferior: 0.4,
      superior: 0.5
    }
  }
}

console.log(prod2)
