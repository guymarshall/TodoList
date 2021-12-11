function addTask() {
  let list = document.getElementById('taskList');
  let task = document.getElementById('task').value;
  let entry = document.createElement('li');
  entry.appendChild(document.createTextNode(task));
  list.appendChild(entry);

  let removeButton = document.createElement('input');
  removeButton.setAttribute('type', 'button');
  removeButton.setAttribute("value", "Remove");
  removeButton.setAttribute("id", "removeButton");
  removeButton.addEventListener('click', function(e) {
    entry.parentNode.removeChild(entry);
  }, false);
  entry.appendChild(removeButton);

  document.getElementById('task').value = '';
}

function clearTasks() {
  document.getElementById('taskList').innerHTML = '';
  document.getElementById('task').value = '';
}
