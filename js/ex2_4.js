function calcularPreco(){
  let inQuilo = document.getElementById('inQuilo')
  let inGramas = document.getElementById('inGramas')
  let outPreco = document.getElementById('outPreco')

  let quilo = Number(inQuilo.value)
  let gramas = Number(inGramas.value)

  let valorTotal = (quilo / 1000) * gramas

  outPreco.textContent = `Valor a pagar R$: ${valorTotal.toFixed(2)}`
}
let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularPreco)