let ul = document.querySelector("ul");
let btn = document.querySelector(".btn");

const url = "https://jsonplaceholder.typicode.com/todos/";

btn.addEventListener("click", () => {
  axios
    .get(url)
    .then((data) => {
      data.data;
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = data[i].title;
        ul.appendChild(li);
      }
    });
});
