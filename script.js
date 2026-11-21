const taskForm = document.querySelector('.task-form');
const titleInput = document.querySelector('#task-title');
const taskList = document.querySelector('.task-list');
const taskCount = document.querySelector('#task-count');

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
  taskList.append(task);

  const total = taskList.children.length;
  taskCount.textContent = total === 1 ? '1 tarefa' : total + ' tarefas';
  taskForm.reset();
  titleInput.focus();
});
