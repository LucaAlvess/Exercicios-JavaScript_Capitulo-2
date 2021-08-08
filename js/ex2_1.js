//declara a função
function mostrarOla(){
//Obtém o conteúdo do campo (com id=) nome
  let nome = document.getElementById('nome').value
//Exibe no parágrafo (resposta): 'Olá ' e o nome informado
  document.getElementById('resposta').textContent = 'Olá, ' + nome + '.'

}
//Cria uma referẽncia ao botão (com id=) mostrar
  let mostrar = document.getElementById('mostrar')
//Registra para o botão 'mostrar' um ouvinte para o evento click, que ao ser clicado irá chamar a função mostrarOla
  mostrar.addEventListener('click', mostrarOla)
