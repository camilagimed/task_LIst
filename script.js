const filterButtons = document.querySelectorAll('.task-filters button');
const tasks = document.querySelectorAll('.task-list li');

for (const button of filterButtons) {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    for (const filterButton of filterButtons) {
      filterButton.setAttribute('aria-pressed', String(filterButton === button));
    }

    for (const task of tasks) {
      task.hidden = filter !== 'todas' && task.dataset.status !== filter;
    }
  });
}
