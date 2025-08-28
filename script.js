async function loadTasks() {
  const res = await fetch('/api/getTasks');
  const tasks = await res.json();
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.innerHTML += \ <button onclick="deleteTask(\)">🗑️</button>\;
    taskList.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (!task) return;

  await fetch('/api/addTask', {
    method: 'POST',
    body: JSON.stringify({ task }),
    headers: { 'Content-Type': 'application/json' }
  });

  input.value = '';
  loadTasks();
}

async function deleteTask(index) {
  await fetch('/api/deleteTask', {
    method: 'POST',
    body: JSON.stringify({ index }),
    headers: { 'Content-Type': 'application/json' }
  });

  loadTasks();
}

loadTasks();
