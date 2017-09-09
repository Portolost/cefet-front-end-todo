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

  containerEl.appendChild(tarefaLiEl);
}


// limpa a <ul> do que quer que esteja lá
containerEl.innerHTML = '';
// chama a função que insere na página para cada tarefa
// do vetor 'tarefas'
tarefas.forEach(insereTarefaNaPagina);
