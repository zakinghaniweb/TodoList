document.getElementById('add-btn').addEventListener('click', function() {
    let todoInput = document.getElementById('todo-input');
    let todoValue = todoInput.value;
    
    if (todoValue) {
        addTodoItem(todoValue);
        todoInput.value = '';
    }
});
function addTodoItem(todoText) {
    let todoTasksDone = 0;
    let TotalTodoDoneResult = document.querySelector('.todo-done')

    let todoList = document.getElementById('todo-list');
    
    let li = document.createElement('li');
    
    let input = document.createElement('input');
    input.value = todoText;
    input.classList.add('todo-name');
    input.setAttribute('readonly', 'readonly');
    
    let buttonDiv = document.createElement('div');
    let inputDiv = document.createElement('div');
    
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    
    let editBtm = document.createElement('button');
    editBtm.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBtm.classList.add('edit-btn');
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    let TotalTodoCountResult = document.querySelector('.todo-total-count')
    let TotalTodoCount = document.querySelectorAll('li').length + 1;
    TotalTodoCountResult.innerHTML = TotalTodoCount;
    
    
    inputDiv.appendChild(checkbox);
    inputDiv.appendChild(input);
    
    li.appendChild(inputDiv);
    li.appendChild(buttonDiv);
    buttonDiv.appendChild(editBtm);
    buttonDiv.appendChild(deleteBtn);
    checkbox.addEventListener("click",()=>{
        if (checkbox.checked) {
            todoTasksDone++
            TotalTodoDoneResult.innerHTML = todoTasksDone
            input.style = 'text-decoration: line-through'
        }
        else{
            todoTasksDone--
            TotalTodoDoneResult.innerHTML = todoTasksDone
            input.style = 'text-decoration: none'
        }
    })
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    editBtm.addEventListener('click', function() {
        if (editBtm.innerHTML == '<i class="fa-solid fa-pen"></i>') {
            input.removeAttribute('readonly');
            input.focus();
            editBtm.innerHTML = 'Save';
            editBtm.style = 'background:green';
            editBtm
        } else {
            input.setAttribute('readonly', 'readonly');
            editBtm.style = 'background:#6a11cb';
            editBtm.innerHTML = '<i class="fa-solid fa-pen"></i>';
        }
    });
    todoList.appendChild(li);
}
