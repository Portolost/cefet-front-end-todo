let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
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

  // Desafio 3: usar a categoria da tarefa para estilizá-la
  tarefaLiEl.classList.add('categoria-' + tarefa.categoria);

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
let nomeInputEl = document.querySelector('#nova-tarefa-nome');

// Desafio 2:
// trouxemos a função para fora e demos um nome para ela
// para podermos chamá-la em mais de 1 lugar
function novaTarefa() {
  // Desafio 3: pegamos o <select> com as categorias
  let categoriaEl = document.querySelector('#nova-tarefa-categoria');

  // cria um novo objeto 'tarefa'
  let novaTarefa = {
    nome: nomeInputEl.value,
    categoria: categoriaEl.value, // Desafio 3: categoria selecionada
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
}

botaoIncluirEl.addEventListener('click', novaTarefa);

// Desafio 2: incluir nova tarefa ao pressionar 'Enter'
// no campo de nome da tarefa
nomeInputEl.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    novaTarefa();
  }
});
