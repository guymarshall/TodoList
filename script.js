function addTask() {
  let list = document.getElementById('taskList');
  let task = document.getElementById('task').value;
  let entry = document.createElement('li');
  entry.appendChild(document.createTextNode(task));
  list.appendChild(entry);
}
