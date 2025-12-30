let todos = JSON.parse(localStorage.getItem("todos")) || [];
const list = document.getElementById("todoList");

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodo() {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        if (todo.done) li.classList.add("completed");

        li.innerHTML = `
            <span onclick="toggleDone(${index})">${todo.text}</span>
            <button class="delete" onclick="deleteTodo(${index})">✕</button>
        `;
        list.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById("todoInput");
    if (input.value.trim() === "") return;

    todos.push({ text: input.value, done: false });
    input.value = "";
    saveTodo();
    renderTodo();
}

function toggleDone(index) {
    todos[index].done = !todos[index].done;
    saveTodo();
    renderTodo();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodo();
    renderTodo();
}

renderTodo();
