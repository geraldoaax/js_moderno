const pessoa = {
  nome: 'ana'
  ,idade: 5,
  endereço: {
    rua:'rua coxinha',
    numero: 2321
  }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome:n, idade:i} = pessoa
console.log(n, i)


const {sobrenome, bemcoxinha = true} = pessoa
console.log(sobrenome, bemcoxinha)


const { endereço: { rua, numero, cep = null} } = pessoa
console.log(rua, numero, cep)


