const filterButtons = document.querySelectorAll('.task-filters button');
const taskForm = document.querySelector('.task-form');
const titleInput = document.querySelector('#task-title');
const taskList = document.querySelector('.task-list');
const taskCount = document.querySelector('#task-count');

let activeFilter = 'todas';

function applyTaskFilter(task) {
  task.hidden = activeFilter !== 'todas' && task.dataset.status !== activeFilter;
}

for (const button of filterButtons) {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;

    for (const filterButton of filterButtons) {
      filterButton.setAttribute('aria-pressed', String(filterButton === button));
    }

    for (const task of taskList.children) {
      applyTaskFilter(task);
    }
  });
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  if (!title) {
    titleInput.value = '';
    titleInput.reportValidity();
    return;
  }

  const task = document.createElement('li');
  task.textContent = title;
  task.dataset.status = 'pendente';
  applyTaskFilter(task);
  taskList.append(task);

  const total = taskList.children.length;
  taskCount.textContent = total === 1 ? '1 tarefa' : total + ' tarefas';
  taskForm.reset();
  titleInput.focus();
});
