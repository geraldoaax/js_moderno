const saudacao = 'Opa'

function exec() {
  const saudacao = 'coxinha'
  return saudacao
}
//objetos sao grupos alinhados de pares nome/valor

const cliente = {
  nome: 'Predro',
  idade: 43,
  peso: 90,
  endereco: {
    logradouro: 'rua x',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
