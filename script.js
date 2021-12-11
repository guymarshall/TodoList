function addTask() {
  let list = document.getElementById('taskList');
  let task = document.getElementById('task').value;
  let entry = document.createElement('li');
  entry.appendChild(document.createTextNode(task));
  list.appendChild(entry);
  document.getElementById('task').value = '';
}

function clearTasks() {
  document.getElementById('taskList').innerHTML = '';
  document.getElementById('task').value = '';
}

function addText(){
  var input = document.getElementById('inputTask').value;
  var node=document.createElement("p");
  var textnode=document.createTextNode(input);
  node.appendChild(textnode);
  document.getElementById('addTask').appendChild(node);

  var removeTask = document.createElement('input');
  removeTask.setAttribute('type', 'button');
  removeTask.setAttribute("value", "Remove");
  removeTask.setAttribute("id", "removeButton");
  removeTask.addEventListener('click', function(e) {
    node.parentNode.removeChild(node);
  }, false);
  node.appendChild(removeTask);
}
