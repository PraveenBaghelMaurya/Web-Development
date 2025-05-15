let input = document.querySelector("#input");
let taskList = document.querySelector(".taskList");
let submit = document.querySelector("#submit");

submit.addEventListener("click", (ev) => {
  // console.log(ev.target);
  let InputData = input.value;
  console.log(InputData);

  let list = document.createElement("li");
  let btn1 = document.createElement("button");
  btn1.innerText = "⬆️";
  btn1.classList.add('up-arrow')
  let btn2 = document.createElement("button");
  btn2.innerText = "⬇️";
  btn2.classList.add('down-arrow')
  let btn3 = document.createElement("button");
  btn3.innerText = "❌";
 

  list.innerHTML = `${InputData}`;
  list.append(btn1);
  list.append(btn2);
  list.append(btn3);
  taskList.append(list);

  input.value = "";
  // ---------------------------------------------------List button Functionality------------------------------------------------------
  btn1.onclick=(ev) => {
    let sibling = ev.target.parentElement.previousElementSibling;
    let currentElement = ev.target.parentElement;
    taskList.insertBefore(currentElement, sibling);
  };

  btn2.onclick=(ev) => {
    let sibling = ev.target.parentElement.nextElementSibling;
    let currentElement = ev.target.parentElement;
    taskList.insertBefore(sibling, currentElement);
  };

  btn3.onclick=(ev) => {
    let item = ev.target.parentElement;
    item.remove();
  };
  // ----------------------------------------------------------------------------------------------------------------------------------
});
