let todoList = [
];
function renderTodoList(){
    let todoListHTML = '';
for(let i=0;i<todoList.length;i++){
    let todoobject = todoList[i];
    // let name = todoobject.name;
    // let duedate = todoobject.duedate;
    let {name,duedate} = todoobject;
    let html = `
        <div>${name}</div>
        <div> ${duedate}</div>
        <button onclick="
        todoList.splice(${i},1)
        renderTodoList()  
        " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
}
document.querySelector('.js-todo-list')
 .innerHTML = todoListHTML
console.log(todoListHTML)
}



function addTodo(){
    let inputElement = document.querySelector('.js-name-input');
    let name = inputElement.value; 
    let dateInputElement = document.querySelector('.js-due-date-input');
    const duedate = dateInputElement.value;
    todoList.push({
    //   name: name,
    //   duedate: duedate
    name,
    duedate
    }); 
    console.log(todoList);
    inputElement.value = '';
    renderTodoList()
}






























