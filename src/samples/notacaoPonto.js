console.log(Math.ceil(5.1))

const obje1 = {}
obje1.nome = 'coxinha'
//  obje1['nome'] = 'bola'
console.log(obje1.nome)


function Obj(nome) {
  this.nome = nome
  this.exec = function(){
    console.log('exec...')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Junao')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

