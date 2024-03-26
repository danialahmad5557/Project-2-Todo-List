const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = [];taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = {
            id: Date.now(),
            text: taskText
        };
        tasks.push(task);
        renderTaskList();
        taskInput.value = '';
    }
});

function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        span.textContent = task.text;
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.dataset.id = task.id;
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.dataset.id = task.id;
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        li.id = task.id;
        taskList.appendChild(li);
        editBtn.addEventListener('click', editTask);
        deleteBtn.addEventListener('click', deleteTask);
    });
}

function editTask(e) {
    const taskId = e.target.dataset.id;
    const task = tasks.find((t) => t.id === parseInt(taskId));
    taskInput.value = task.text;
    tasks.splice(tasks.indexOf(task), 1);
    renderTaskList();
}

function deleteTask(e) {
    const taskId = e.target.dataset.id;
    const task = tasks.find((t) => t.id === parseInt(taskId));
    tasks.splice(tasks.indexOf(task), 1);
    renderTaskList();
}

renderTaskList();
