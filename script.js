function addTodo() {
    const todoElement = document.getElementById("new-todo");
    const todo = todoElement.value;
    todoElement.value = "";

    if (todo.length < 4) {
        return alert("Please enter a todo that is at least 4 characters long.");
    }

    const list = document.getElementById("list");
    const li = document.createElement("li");
    const text = document.createTextNode(todo);

    li.setAttribute("onclick", "this.remove()");

    li.appendChild(text);
    list.appendChild(li);
}