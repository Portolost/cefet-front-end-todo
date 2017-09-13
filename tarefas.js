let tarefas = [
  { nome: 'Chupar chiclete', categoria: 'lazer', marcado: false }
];

// Exercício 1: carregar as tarefas existentes
// ------------
//
let containerEl = document.querySelector('#lista-tarefas');
function insereTarefaNaPagina(tarefa) {
  let tarefaLiEl = document.createElement('li');
  tarefaLiEl.innerHTML = tarefa.nome;
  tarefaLiEl.classList.add('item-tarefa');
  if (tarefa.marcado) {
    tarefaLiEl.classList.add('marcado');
  }

  // Desafio 1: novas tarefas no início
  let primeiraTarefaEl = containerEl.querySelector(':first-child');
  containerEl.insertBefore(tarefaLiEl, primeiraTarefaEl);
}


// limpa a <ul> do que quer que esteja lá
containerEl.innerHTML = '';
// chama a função que insere na página para cada tarefa
// do vetor 'tarefas'
tarefas.forEach(insereTarefaNaPagina);





// Exercício 2: incluir uma nova tarefa
// -----------
//
let botaoIncluirEl = document.querySelector('#incluir-nova-tarefa');
botaoIncluirEl.addEventListener('click', function(e) {
  let nomeInputEl = document.querySelector('#nova-tarefa-nome');

  // cria um novo objeto 'tarefa'
  let novaTarefa = {
    nome: nomeInputEl.value,
    categoria: 'outros',
    marcado: false
  };

  // coloca-o no vetor 'tarefas'
  tarefas.push(novaTarefa);
  // cria o <li> referente a essa tarefa e o
  // insere na página
  insereTarefaNaPagina(novaTarefa);

  // limpar o input e devolver o foco pra ele
  nomeInputEl.value = '';
  nomeInputEl.focus();
});


// Exercício 3: salvar e carregar o nome do usuário dono da lista
let carregarEl = document.querySelector('#carregar');
let salvarEl = document.querySelector('#salvar');
let nomeUsuarioEl = document.querySelector('#nome-usuario');
// salva quem é o dono da lista no localStorage
salvarEl.addEventListener('click', function(e) {
  localStorage.setItem('dono-da-lista', nomeUsuarioEl.value);
  // Exercício 4: tentando salvar o vetor de tarefas
  // localStorage.setItem('lista-de-tarefas', tarefas);

  // Exercício 5: carrega o vetor de tarefas
  localStorage.setItem('lista-de-tarefas', JSON.stringify(tarefas));
});

// carrega o dono da lista e coloca no input
carregarEl.addEventListener('click', function(e) {
  nomeUsuarioEl.value = localStorage.getItem('dono-da-lista');

  // Exercício 5: carrega o vetor de tarefas
  tarefas = JSON.parse(localStorage.getItem('tarefas'));
  // limpa a <ul> do que quer que esteja lá
  containerEl.innerHTML = '';
  // chama a função que insere na página para cada tarefa
  // do vetor 'tarefas'
  tarefas.forEach(insereTarefaNaPagina);
});


let minimizarEl = document.querySelector('#minimizar');
let marcaEl = document.querySelector('#marca');
minimizarEl.addEventListener('click', function(e) {
  let minimizou = marcaEl.classList.toggle('minimizado');
  sessionStorage.setItem('minimizado', minimizou);
});

let estaMinimizado = sessionStorage.getItem('minimizado');
if (estaMinimizado === 'true') {
  marcaEl.classList.add('minimizado');
}
