let data = document.querySelector(".data");
let btn = document.querySelector(".btn");
let ul = document.querySelector(".ul");

let url = "https://jsonplaceholder.typicode.com/todos/";

btn.addEventListener("click", () => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
    
      for (let i = 0; i < data.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = data[i].title;
        ul.appendChild(li);
      }
    });
});
