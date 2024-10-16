document.getElementById('add-btn').addEventListener('click', function() {
    let todoInput = document.getElementById('todo-input');
    let todoValue = todoInput.value.trim();

    if (todoValue) {
        addTodoItem(todoValue);
        todoInput.value = '';
    }
});
function addTodoItem(todoText) {
    let todoList = document.getElementById('todo-list');

    let li = document.createElement('li');
    
    let span = document.createElement('input');
    span.value = todoText;
    span.setAttribute('readonly', 'readonly');

    let buttonDiv = document.createElement('div');

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');

    let editBtm = document.createElement('button');
    editBtm.textContent = 'Edit';
    editBtm.classList.add('edit-btn');


    buttonDiv.appendChild(deleteBtn);
    buttonDiv.appendChild(editBtm);

    li.appendChild(span);
    li.appendChild(buttonDiv);

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    editBtm.addEventListener('click', function() {
        if (editBtm.textContent == 'Edit') {
            span.removeAttribute('readonly');
            span.focus();
            editBtm.textContent = 'Save';
        } else {
            span.setAttribute('readonly', 'readonly');
            editBtm.textContent = 'Edit';
        }
    });
    todoList.appendChild(li);
}
