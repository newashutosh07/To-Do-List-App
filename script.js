const item = document.getElementById("item");
const toDoBox = document.getElementById("to-do-box");

item.addEventListener("keyup", (e) => {
  //   console.log(e.key);
  if (e.key == "Enter") {
    addTodo(item.value);
    item.value = "";
  }
});

const addTodo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${item}
                    <i class="fas fa-times"></i>`;
  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });
  toDoBox.appendChild(listItem);
};
