const input = document.getElementById("todo-input");
const list = document.getElementById("list");

let tasks = [];

const submitTask = () => {
  const title = input.value;
  if (title) {
    tasks.push({ id: tasks.length + 1, title, completed: false });
    input.value = "";
    render();
  }
}

function taskStatus(taskId, completed) {
  const taskIndex = tasks.findIndex(item => taskId === item.id);
  if (taskIndex > -1) {
    tasks[taskIndex].completed = !completed;
    render();
  }
}

deleteTask = (index) => {
  tasks.splice(index, 1)
  render()
}

const createTaskElement = (task, index) => {
  return (
    `<li onclick="taskStatus(${task.id}, ${task.completed})">
      ${task.completed ? `<i class="material-icons completed">checked</i>` : ""}
      <span class="item-text">${task.title}</span>
      <button onclick="deleteTask(${index})"> <i class="material-icons">clear</i> </button>
    </li>`
  );
}

const render = () => list.innerHTML = tasks.map((task, index) => createTaskElement(task, index)).join("\n");

input.onkeydown = event => {
  if (event.key === "Enter")
    submitTask();
}