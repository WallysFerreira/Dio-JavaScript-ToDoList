const form = document.getElementById('form');
const taskList = document.getElementById('list');

form.onsubmit = function (e) {
  e.preventDefault();

  const input = document.getElementsByTagName('input')[0];
  
  addTaskToList(input.value)

  form.reset();
}

function addTaskToList (task) {
  const taskContainer = document.createElement('div');
  const newTask = document.createElement('input');
  const taskDescription = document.createElement('label');
  const taskText = document.createTextNode(task);

  newTask.setAttribute('type', 'checkbox');
  newTask.setAttribute('name', task);
  newTask.setAttribute('id', task);

  taskDescription.setAttribute('for', task);
  taskDescription.appendChild(taskText);

  taskContainer.appendChild(newTask);
  taskContainer.appendChild(taskDescription)

  taskList.appendChild(taskContainer);
}