const doDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos =[];

function saveToDos(){
    localStorage.setItem("toDos",toDos);
}


function deleteTodDo(event){
    console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

doDoForm.addEventListener("submit",handleToDoSubmit);
