function verPromocao(){
  let inProduto = document.getElementById('inProduto')
  let inPreco = document.getElementById('inPreco')
  let outProduto = document.getElementById('outProduto')
  let outPromocao = document.getElementById('outPromocao')

  let produto = inProduto.value
  let preco = Number(inPreco.value)

  let tresProdutos = (preco * 3) - 4 * 0.50
  let precoPromocao = preco * 0.50

  outProduto.textContent = `${produto} - Promoção: Leve 3 por R$: ${tresProdutos.toFixed(2)}`
  outPromocao.textContent = `O 3° produto custa apenas R$: ${precoPromocao.toFixed(2)}`

}

  let btPromocao = document.getElementById('btPromocao')
  btPromocao.addEventListener('click', verPromocao)