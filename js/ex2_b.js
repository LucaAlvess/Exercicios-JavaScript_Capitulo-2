function pagarLanHouse() {
  //Cria referência aos elementos da página
  let inValor = document.getElementById("inValor");
  let inUso = document.getElementById("inUso");
  let outPagar = document.getElementById("outPagar");

  //Obtém conteúdo dos campos de entrada
  let valor = Number(inValor.value);
  let uso = Number(inUso.value);

  //Cálculo 
  let total = Math.ceil(uso / 15) * valor;
  //Altera o conteúdo dos parágrafos de resposta
  outPagar.textContent = "Valor a pagar R$: " + total.toFixed(2);
}

  //Cria uma referência ao elemento btConverter (botão)
  let btCalcular = document.getElementById("btCalcular");
  //Registra um evento associado ao botão, para carregar uma função   
  btCalcular.addEventListener("click", pagarLanHouse);