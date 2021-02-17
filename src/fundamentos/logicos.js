function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2 //ou
  const comprarTV50 = trabalho1 && trabalho2 //e -> analisa os dois
  //const comprarTV32 = !!(trabalho1) ^ trabalho2
  const comprarTV32 =  trabalho1 != trabalho2 // ou exclusivo com diferente
  const manterSaudavel = !comprarSorvete //unario

  return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}


}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
