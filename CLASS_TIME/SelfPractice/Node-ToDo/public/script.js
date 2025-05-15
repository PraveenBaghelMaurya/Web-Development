let taskForm = document.querySelector("#task-form");
let taskInput = document.querySelector("#task-input");
let taskList = document.querySelector("#task-list");
let filterButtons = document.querySelector(".filter-buttons");
let clearCompleted = document.querySelector("#clear-completed");

function addToTaskList(data) {
  //data insert from server to browser
  taskList.innerText = "";
  data.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = `<span class="task-text">${item.task}</span>
        <div class="task-actions">
            <button class="complete-btn">
                ${item.status ? "Undo" : "Complete"}
                <span style='display:none;'>${item.id}</span>
            </button>
            <button class="delete-btn">
            Delete
            <span style='display:none;'>${item.id}</span>
            </button>
        </div>`;
        taskList.appendChild(li);
  });
}

function refreshTodos() {
  axios
    .get("/todos")
    .then((data) => {
      currentTodos = data;
      addToTaskList(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

taskForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let taskName = taskInput.value;

  axios
    .post("/todos", () => {
      task: taskName;
    })
    .then((data) => {
      refreshTodos();
    })
    .catch((err) => {
      alert(err.message);
    });
});
