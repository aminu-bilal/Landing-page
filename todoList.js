// Selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');

// Functions
const addTodo = (e) => {
    // Prevent form from submitting
    e.preventDefault();
    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    // Add todo to localStorage
    saveLocalTodos(todoInput.value);
    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check">check</i>';
    completedButton.classList.add('complete_btn');
    todoDiv.appendChild(completedButton);
    // Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash">trash</i>';
    trashButton.classList.add('trash_btn');
    todoDiv.appendChild(trashButton);
    // Append to list 
    todoList.appendChild(todoDiv);
    // Clear Todo field 
    todoInput.value = "";
}
const deleteCheck = (e) => {
    const item = e.target;
    // Delete todo
    if(item.classList[0] === 'trash_btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    // Check mark
    if(item.classList[0] === 'complete_btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
const filterTodo = (e) => {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
        }
    });
}
function saveLocalTodos(todo){
    // Check---Hey do i already have thing in there?
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
const getTodos = (e) => {
    // Check---Hey do i already have thing in there?
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        // Todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // Create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo_item');
        todoDiv.appendChild(newTodo);
        // Check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check">check</i>';
        completedButton.classList.add('complete_btn');
        todoDiv.appendChild(completedButton);
        // Check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash">trash</i>';
        trashButton.classList.add('trash_btn');
        todoDiv.appendChild(trashButton);
        // Append to list 
        todoList.appendChild(todoDiv);
    });
}
function removeLocalTodos(todo){
    // Check---Hey do i already have thing in there?
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
}
// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);