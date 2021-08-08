function promocao(){
//Cria uma referência aos elementos da página
  let inVeiculo = document.getElementById('inVeiculo')
  let inPreco = document.getElementById('inPreco')
  let outVeiculo = document.getElementById('outVeiculo')
  let outEntrada = document.getElementById('outEntrada')
  let outParcela = document.getElementById('outParcela')
//Obtém o contúdo dos campos de entrada
  let veiculo = inVeiculo.value
  let preco = Number(inPreco.value)
//Divide o preço em 50%
  let precoDesconto = preco * 0.50
//Divide metade do preço em 12x
  let parcelas = (preco * 0.50 ) / 12
//Altera o conteúdo dos h3 de resposta
  outVeiculo.textContent = `Promoção: ${veiculo}` 
  outEntrada.textContent = `Entrada de R$: ${precoDesconto.toFixed(2)}`
  outParcela.textContent = `+ 12x de R$: ${parcelas.toFixed(2)}`
}
//Cria uma referência ao elemento btConverter (botão)
  let btPromocao = document.getElementById('btPromocao')
//Registra um evento associado ao botão, para carregar uma função
  btPromocao.addEventListener('click', promocao)
