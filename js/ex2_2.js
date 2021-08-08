function converter(){
//Cria uma referência aos elementos da página
  let inTitulo = document.getElementById('inTitulo')
  let inDuracao = document.getElementById('inDuracao')
  let outTitulo =document.getElementById('outTitulo')
  let outResposta = document.getElementById('outResposta')

//Obtém o conteúdo dos campos de entrada
  let titulo = inTitulo.value
  let duracao = Number(inDuracao.value)

//Arredonda para baixo o resultado da divisão
  let horas = Math.floor(duracao / 60)
//Obtém o resto da divisão entre os números
  let minutos = duracao % 60

//Altera o conteúdo dos h3 de resposta
  outTitulo.textContent = titulo
  outResposta.textContent = horas + ' Hora(s) e ' + minutos + 'Minuto(s)'
}
//Cria uma referência ao elemento btConverter (botão)
  let btConverter = document.getElementById('btConverter')
//Registra um evento associado ao botão, para carregar uma função
  btConverter.addEventListener('click', converter)
