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

for (tarefa of tarefas){
  insereTarefaNaPagina(tarefa);
}

function insereTarefaNaPagina(tarefa){
  let listaEl = document.querySelector('#lista-tarefas');
  let liEl = document.createElement('li');
  let allLi = document.querySelector('.item-tarefa');
  
  listaEl.insertBefore(liEl, allLi);
  liEl.innerHTML = tarefa.nome;
  liEl.classList.add('item-tarefa');
  liEl.classList.add('categoria-'+tarefa.categoria);
  
  if (tarefa.marcado === true)
    liEl.classList.add('marcado');
}
function criarTarefa(e){
  let novaTarefaIn = document.querySelector('#nova-tarefa-nome');
  let novaCategoriaIn = document.querySelector('#nova-tarefa-categoria');
  let tarefa = {
    nome: novaTarefaIn.value,
    categoria: novaCategoriaIn.options[novaCategoriaIn.selectedIndex].value,
    marcado: false
  }
  tarefas.push(tarefa);
  insereTarefaNaPagina(tarefa)
  novaTarefaIn.value = '';
}

let botaoEl = document.querySelector('#incluir-nova-tarefa');

botaoEl.addEventListener('click', criarTarefa);

addEventListener('keyup', function(e){
  if (e.key === 'Enter'){
    criarTarefa();
  }
});