let taskForm = document.querySelector('#task-form');
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('#task-list');
let filterButtons = document.querySelector('.filter-buttons');
let clearCompleted = document.querySelector('#clear-completed');

let currentTodos=[];
//need to understand , specially loop
filterButtons.addEventListener('Click',(ev)=>{
    let element=ev.target;
    let id =element.getAttribute('id');
    let newArr=[];

    let allButtons=element.parentElement.children;
    console.log(allButton)//checking which button is clicked
    for(let i=0;i<allButtons.length;i++){//<------allButtons.length?
        allButtons[i].classList.remove('active')//loop hi smjh nhi aaya
    }
    if(id=='filter-all'){
        allButtons[0].classList.add('active');
        newArr=currentTodos;
    }else if(id=='filter-completed'){
        allButtons[2].classList.add('active');
        newArr=currentTodos.filter(item=>item.status==true)
    }else if (id=='filter-active'){
        allButtons[1].classList.add('active');
        newArr=currentTodos.filter(item=>item.status==false)
    }
})


function addToTaskList(data){
    taskList.innerText="";

    data.forEach(item=>{
        let li=document.createElement('li')
        li.classList.add('task-item')
        li.innerHTML=`<span class="task-text">${item.task}</span>
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
        taskList.append('li')//insert li into html files's taskList
    })
}
function refreshTodo(){
    axios.get('/todos').then(({data})=>{
        currentTodos=data;
        addToTaskList(data);
    }).catch(err=>{
        console.log(err)
    })
}
taskForm.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    const taskName=taskInput.Value;
    taskInput.Value="";

    axios.post('/todos',{
        task:taskName
    }).then(({data})=>{
        refreshTodo();        
    }).catch((err)=>{
        alert(err.message);
    })
})

taskList.addEventListener('click',(ev)=>{
    let element=ev.target;
    if (element.classList.contains('complete-btn')){
        console.log("completed button clicked")

        let id=element.children[0].innerText;
        axios.put('/todos')
    }
})