function mostrarPromocao(){

  let inProduto = document.getElementById('inProduto')
  let inPreco = document.getElementById('inPreco')
  let outProduto = document.getElementById('outProduto')
  let outPromocao = document.getElementById('outPromocao')

  let produto = inProduto.value
  let preco = Number(inPreco.value)

  let promocao = (preco * 2) 
  let resto = promocao % 2
  let precoPromocao = promocao - resto

  outProduto.textContent = `Promoção de ${produto}`
  outPromocao.textContent = `Leve 2 por apenas R$: ${precoPromocao.toFixed(2)}`
  
}
  let btMostrarPromocao = document.getElementById('btMostrarPromocao')
  btMostrarPromocao.addEventListener('click', mostrarPromocao)