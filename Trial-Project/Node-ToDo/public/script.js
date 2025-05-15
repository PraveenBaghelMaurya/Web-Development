let taskForm = document.querySelector('#task-form');
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('#task-list');
let filterButtons = document.querySelector('.filter-buttons');
let clearCompleted = document.querySelector('#clear-completed');

let currentTodos = [];

filterButtons.addEventListener('click', (ev) => {
    // console.log(ev.target);
    let element = ev.target;
    let id = element.getAttribute('id');
    let newArr = [];

    let allButtons = element.parentElement.children;
    console.log(allButtons)
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('active')
    }

    if (id == 'filter-all') { // 0th index par allButton ke andar
        allButtons[0].classList.add('active');
        newArr = currentTodos;
    } else if (id == 'filter-completed') { // 2nd index par allButton ke andar
        allButtons[2].classList.add('active');
        newArr = currentTodos.filter(item => item.status == true);
    }
    else if (id == 'filter-active') { // 1st index par allButton ke andar
        allButtons[1].classList.add('active');
        newArr = currentTodos.filter(item => item.status == false);
    }

    addToTaskList(newArr);
})

clearCompleted.addEventListener('click', (ev) => {
    axios.put('/clear-completed')
        .then(() => {
            refreshTodos();
        }).catch(err => {
            alert(err.message)
        })
})

function addToTaskList(data) {
    taskList.innerText = ''; // Empty the tasklist first before you add
    // all the data elements to it
    data.forEach(item => {
        /*
        <span class="task-text">${task.text}</span>
        <div class="task-actions">
            <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
        */

        let li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `<span class="task-text">${item.task}</span>
        <div class="task-actions">
            <button class="complete-btn">
                ${item.status ? 'Undo' : 'Complete'}
                <span style='display:none;'>${item.id}</span>
            </button>
            <button class="delete-btn">
            Delete
            <span style='display:none;'>${item.id}</span>
            </button>
        </div>`

        taskList.appendChild(li);
    })
}

function refreshTodos() {
    axios.get('/todos')
        .then(({ data }) => {
            currentTodos = data;
            addToTaskList(data);
        }).catch(err => {
            console.log(err);
        })
}


taskForm.addEventListener('submit', (ev) => {
    ev.preventDefault(); // stops the default behaviour of HTML element
    const taskName = taskInput.value;
    taskInput.value = '';

    axios.post('/todos', {
        task: taskName
    }).then(({ data }) => {
        refreshTodos();
    })
        .catch(err => {
            alert(err.message);
        })
})


taskList.addEventListener('click', (ev) => {
    // tasklist ke andar jab complete-btn or delete-btn par click ho
    // tabhi kaam karna hai
    let element = ev.target;
    if (element.classList.contains('complete-btn')) {
        console.log("Complete button clicked")
        // console.log(element)
        // console.log(element.children)
        // console.log(element.children[0])
        // console.log(element.children[0].innerText)
        let id = element.children[0].innerText;
        axios.put('/todos', {
            id
        }).then(({ data }) => {
            // console.log(data);
            refreshTodos();
        })
            .catch(err => {
                console.log(err);
            })
    }
    else if (element.classList.contains('delete-btn')) {
        // console.log("Delete button clicked")
        let id = element.children[0].innerText;
        axios.delete('/todos', {
            data: {
                id
            }
        }).then(({ data }) => {
            refreshTodos();
        })
            .catch(err => {
                console.log(err);
            })
    }
})