let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('taskItem');
        if (task.completed) {
            taskItem.classList.add('completed');
        }
        taskItem.innerHTML = `
            <span>${task.title}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="toggleComplete(${index})">Complete</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const title = taskInput.value.trim();
    if (title !== '') {
        tasks.push({ title, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function editTask(index) {
    const newTitle = prompt('Enter the new task title:');
    if (newTitle !== null && newTitle.trim() !== '') {
        tasks[index].title = newTitle.trim();
        renderTasks();
    }
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
alert("Are you sure! you want to delete");
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();
