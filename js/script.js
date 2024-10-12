// Event listener for the "Add" button
document.getElementById('add-btn').addEventListener('click', function() {
    let todoInput = document.getElementById('todo-input');
    let todoValue = todoInput.value.trim();

    if (todoValue) {
        addTodoItem(todoValue);
        todoInput.value = '';
    }
});

// Function to add a new to-do item
function addTodoItem(todoText) {
    let todoList = document.getElementById('todo-list');

    let li = document.createElement('li');
    
    let span = document.createElement('span');
    span.textContent = todoText;

    let buttonDiv = document.createElement('div');


    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');

    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonDiv);

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    todoList.appendChild(li);
}
